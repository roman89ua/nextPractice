"use client";

import CardCP from "@/components/Card";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MetricsSlot() {
  const pathname = usePathname();
  return (
    <CardCP>
      <div>
        <h1>Metrics slot</h1>

        <Link href={`${pathname}/metricHistory`}>Metric history link</Link>
      </div>
    </CardCP>
  );
}
