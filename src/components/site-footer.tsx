import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-footer text-footer-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:px-6">
        <div>
          <p className="font-display text-2xl leading-none text-cream-foreground">Blushbuild</p>
          <p className="mt-2 text-xs uppercase tracking-[0.24em] opacity-70">Creator Diary</p>
          <p className="mt-4 max-w-xs text-sm leading-6 opacity-80">
            An editorial creator diary about digital products, quiet marketing, and building a small
            business from a laptop.
          </p>
        </div>
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] opacity-70">Read</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/diary">Diary</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/progress">Progress</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] opacity-70">Get</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/resources">Free resources</Link></li>
            <li><Link to="/shop">Shop products</Link></li>
            <li><Link to="/about">Join the list</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] opacity-70">Elsewhere</p>
          <ul className="mt-4 space-y-2 text-sm opacity-90">
            <li>Pinterest</li>
            <li>Instagram</li>
            <li>Etsy</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 text-center text-xs uppercase tracking-[0.16em] opacity-70 lg:px-6">
          © 2026 Blushbuild — all rights reserved
        </div>
      </div>
    </footer>
  );
}
