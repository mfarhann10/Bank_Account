function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  return (
    <div className="fixed top-10 right-10 bg-gray-100 p-6 rounded-md shadow-md text-center font-semibold text-2xl min-w-[200px]">
      {formatCurrency(123456)}
    </div>
  );
}

export default BalanceDisplay;
