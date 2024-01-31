import React from "react";
import Link from "next/link";
import CardCP from "@/components/Card";

const MetricHistoryPage = () => (
  <CardCP>
    <section>
      <h1>Metric history page.</h1>

      <Link
        href={{
          pathname: "/dashboard",
        }}
      >
        Back to dashboard metric slot
      </Link>
    </section>
  </CardCP>
);

export default MetricHistoryPage;
