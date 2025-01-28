import { useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  const { balance } = useSelector((store) => store.account);
  return (
    <div className="absolute top-10 right-10 bg-gray-100 p-6 rounded-md shadow-md text-center font-semibold text-2xl min-w-[200px]">
      {formatCurrency(balance)}
    </div>
  );
}

export default BalanceDisplay;
