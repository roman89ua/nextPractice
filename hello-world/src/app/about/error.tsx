"use client";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <section>
      <h1>Error</h1>
      <p>{error.message}</p>
      <button
        onClick={reset}
        className="border-blue-950 border-2 text-blue-950 rounded-md py-2 px-8 hover:text-white hover:bg-blue-950 hover:transition-colors"
        type="button"
      >
        Try again
      </button>
    </section>
  );
}
