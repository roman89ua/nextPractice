"use client";

const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  return (
    <div>
      <h1>{error.message}</h1>
      <button
        className="py-3 px-9 border-2 border-black rounded-b-md"
        type="button"
        onClick={reset}
      >
        Reset button
      </button>
    </div>
  );
};

export default ErrorBoundary;
