import Link from "next/link";

const AnalyticHistoryPage = () => {
  return (
    <div>
      <h4>Analytic history</h4>
      <Link
        type="button"
        className="border-2 border-blue-950 rounded-xl py-2 px-4"
        href={{
          pathname: "/second-dashboard",
        }}
      >
        Go back to Analytic page
      </Link>
    </div>
  );
};

export default AnalyticHistoryPage;
