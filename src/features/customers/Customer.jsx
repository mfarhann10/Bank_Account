import { useSelector } from "react-redux";

function Customer() {
  const customer = useSelector((store) => store.customer.fullName);

  return <h2 className="text-xl font-semibold mb-8">👋 Welcome, {customer}</h2>;
}

export default Customer;
