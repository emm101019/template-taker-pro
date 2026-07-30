import { Link } from "@tanstack/react-router";
import { useFreebieCart } from "@/lib/freebie-cart";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/diary", label: "Diary" },
  { to: "/progress", label: "Progress" },
  { to: "/resources", label: "Resources" },
  { to: "/blog", label: "Blog" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const { count } = useFreebieCart();

  return (
    <>
      <section className="border-b border-border bg-highlight">
        <Link
          to="/starter-kit"
          className="mx-auto flex max-w-7xl items-center justify-center px-4 py-3 text-center text-[0.68rem] font-medium uppercase tracking-[0.22em] text-muted-foreground transition hover:text-foreground sm:text-xs"
        >
          NEW HERE? GET YOUR FREE PRETTY & UNFORGETTABLE BRAND STARTER KIT ✨
        </Link>
      </section>

      <section className="border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-4 py-5 lg:px-6">
          <Link to="/" className="block">
            <p className="font-display text-3xl leading-none text-foreground">Blushbuild</p>
            <p className="mt-1 text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground">
              Creator Diary
            </p>
          </Link>

          <nav aria-label="Primary" className="order-3 w-full lg:order-2 lg:w-auto">
            <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-foreground/80 sm:gap-5 sm:text-[0.72rem] sm:tracking-[0.18em]">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    activeOptions={{ exact: link.to === "/" }}
                    activeProps={{ className: "text-foreground underline underline-offset-4" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="order-2 flex items-center gap-3 lg:order-3">
            <Link to="/resources" className="icon-shell" aria-label="Search resources">
              ⌕
            </Link>
            <Link to="/shop" className="icon-shell" aria-label="Shop">
              ♡
            </Link>
            <Link
              to="/cart"
              className="icon-shell relative"
              aria-label={`Freebie cart (${count} item${count === 1 ? "" : "s"})`}
            >
              ⛬
              {count > 0 ? (
                <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-foreground px-1 text-[0.6rem] font-semibold leading-none text-background">
                  {count}
                </span>
              ) : null}
            </Link>
            <Link to="/about" className="button-solid">
              Join the list
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
