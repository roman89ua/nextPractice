import Link from "next/link";

const OrderPage = () => (
  <div className="flex flex-col text-center">
    <h2>Orders page</h2>
    <Link
      className="text-cyan-400 border-2 rounded-md border-blue-950 py-3 px-8 m-3"
      href={{
        pathname: "/second-dashboard/order-history",
      }}
    >
      Go to see order history
    </Link>
  </div>
);

export default OrderPage;
