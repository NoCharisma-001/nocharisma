import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="section-code">404 / Archived</p>
      <h1>This idea is not on the factory floor.</h1>
      <Link className="button primary" href="/">
        Return home
      </Link>
    </main>
  );
}
