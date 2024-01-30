"use client";

export default function ErrorBoundary({ error }: { error: Error }) {
  return (
    <section>
      <h1>Error</h1>
      <p>{error.message}</p>
    </section>
  );
}
