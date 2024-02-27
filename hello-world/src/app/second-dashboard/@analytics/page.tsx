import Link from "next/link";

const AnalyticsPage = () => {
  return (
    <div>
      <h2>Analytics page</h2>
      <div>
        <Link
          href={{
            pathname: "/second-dashboard/analyticHistory",
          }}
          className="text-red-800"
        >
          Analytic history
        </Link>
      </div>
    </div>
  );
};

export default AnalyticsPage;
