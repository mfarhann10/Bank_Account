import AccountOperations from "./components/AccountOperations";
import BalanceDisplay from "./components/BalanceDisplay";
import CreateCustomer from "./components/CreateCustomer";
import Customer from "./components/Customer";

function App() {
  return (
    <div className="p-10 font-sans">
      <h1 className="text-3xl font-bold text-center mb-8">
        🏦 The React-Redux Bank ⚛️
      </h1>
      <CreateCustomer />
      <Customer />
      <AccountOperations />
      <BalanceDisplay />
    </div>
  );
}

export default App;
