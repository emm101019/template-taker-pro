import { useCallback, useSyncExternalStore } from "react";

export type CartItem = {
  slug: string;
  title: string;
  type?: string;
};

const CART_KEY = "blushbuild.freebie-cart";
const EVENT = "blushbuild:cart";

const listeners = new Set<() => void>();
let cache: CartItem[] = [];
let cacheRaw: string | null = null;

function readRaw(): string {
  if (typeof window === "undefined") return "[]";
  try {
    return window.localStorage.getItem(CART_KEY) ?? "[]";
  } catch {
    return "[]";
  }
}

function getSnapshot(): CartItem[] {
  const raw = readRaw();
  if (raw !== cacheRaw) {
    cacheRaw = raw;
    try {
      const parsed = JSON.parse(raw);
      cache = Array.isArray(parsed) ? (parsed as CartItem[]) : [];
    } catch {
      cache = [];
    }
  }
  return cache;
}

const emptyServerSnapshot: CartItem[] = [];
function getServerSnapshot(): CartItem[] {
  return emptyServerSnapshot;
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  if (typeof window !== "undefined") {
    window.addEventListener(EVENT, cb);
    window.addEventListener("storage", cb);
  }
  return () => {
    listeners.delete(cb);
    if (typeof window !== "undefined") {
      window.removeEventListener(EVENT, cb);
      window.removeEventListener("storage", cb);
    }
  };
}

function write(items: CartItem[]) {
  try {
    window.localStorage.setItem(CART_KEY, JSON.stringify(items));
  } catch {
    // ignore
  }
  window.dispatchEvent(new Event(EVENT));
}

export function useFreebieCart() {
  const items = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const add = useCallback((item: CartItem) => {
    const current = getSnapshot();
    if (current.some((i) => i.slug === item.slug)) return false;
    write([...current, item]);
    return true;
  }, []);

  const remove = useCallback((slug: string) => {
    write(getSnapshot().filter((i) => i.slug !== slug));
  }, []);

  const clear = useCallback(() => write([]), []);

  const has = useCallback((slug: string) => items.some((i) => i.slug === slug), [items]);

  return { items, add, remove, clear, has, count: items.length };
}
