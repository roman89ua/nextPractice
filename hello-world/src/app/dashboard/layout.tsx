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
    <section className="h-full">
      <div>{children}</div>
      <div className="flex flex-col lg:flex-row flex-1 h-full gap-4 p-4">
        <div className="flex flex-col flex-1 gap-4 h-full">
          <div className="flex-1">{user}</div>
          <div className="flex-1">{notifications}</div>
        </div>
        <div className="flex flex-1">{metrics}</div>
      </div>
    </section>
  );
}
