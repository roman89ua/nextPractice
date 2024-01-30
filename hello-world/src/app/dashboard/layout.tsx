export default function DashboardLayout({
  children,
  metrics,
  notifications,
  user,
}: {
  children: React.ReactNode;
  metrics: React.ReactNode;
  notifications: React.ReactNode;
  user: React.ReactNode;
}) {
  return (
    <section>
      <div>{children}</div>
      <div className="flex gap-8">
        <div className="flex flex-col gap-8">
          <div>{user}</div>
          <div>{notifications}</div>
        </div>
        <div className="flex w-full">{metrics}</div>
      </div>
    </section>
  );
}
