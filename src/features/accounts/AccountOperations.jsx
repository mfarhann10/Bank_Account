import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, payLoan, requestLoan, withdraw } from "./AccountSlice";

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");

  const dispatch = useDispatch();
  const {
    balance,
    loan: currentLoan,
    loanPurpose: currentLoanPurpose,
    isLoading,
  } = useSelector((store) => store.account);

  console.log(balance);

  function handleDeposit() {
    if (!depositAmount) return;
    dispatch(deposit(depositAmount, currency));
    setDepositAmount("");
    setCurrency("");
  }

  function handleWithdrawal() {
    if (!withdrawalAmount) return;
    dispatch(withdraw(withdrawalAmount));
    setWithdrawalAmount("");
  }

  function handleRequestLoan() {
    if (!loanAmount || !loanPurpose) return;
    dispatch(requestLoan(loanAmount, loanPurpose));
    setLoanAmount("");
    setLoanPurpose("");
  }

  function handlePayLoan() {
    dispatch(payLoan());
  }

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Your account operations</h2>
      <div className="bg-gray-100 p-8 rounded-md shadow-md space-y-6">
        <div className="flex items-center gap-4">
          <label className="w-40 font-medium">Deposit</label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(+e.target.value)}
            className="flex-1 border border-gray-300 rounded px-3 py-2"
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2"
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="IDR">Rupiah</option>
          </select>
          <button
            onClick={handleDeposit}
            className="bg-green-500 text-white uppercase font-semibold px-4 py-2 rounded hover:bg-green-600"
            disabled={isLoading}
          >
            {isLoading ? "Converting..." : `Deposit ${depositAmount}`}
          </button>
        </div>
        <div className="flex items-center gap-4">
          <label className="w-40 font-medium">Withdraw</label>
          <input
            type="number"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(+e.target.value)}
            className="flex-1 border border-gray-300 rounded px-3 py-2"
          />
          <button
            onClick={handleWithdrawal}
            className="bg-yellow-500 text-white uppercase font-semibold px-4 py-2 rounded hover:bg-yellow-600"
          >
            Withdraw {withdrawalAmount}
          </button>
        </div>
        <div className="flex items-center gap-4">
          <label className="w-40 font-medium">Request loan</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
            className="flex-1 border border-gray-300 rounded px-3 py-2"
            placeholder="Loan amount"
          />
          <input
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            className="flex-1 border border-gray-300 rounded px-3 py-2"
            placeholder="Loan purpose"
          />
          <button
            onClick={handleRequestLoan}
            className="bg-purple-500 text-white uppercase font-semibold px-4 py-2 rounded hover:bg-purple-600"
          >
            Request loan
          </button>
        </div>
        {currentLoan > 0 && (
          <div className="flex items-center gap-4">
            <span className="flex-1 text-lg font-medium">
              Pay back ${currentLoan} ({currentLoanPurpose})
            </span>
            <button
              onClick={handlePayLoan}
              className="bg-red-500 text-white uppercase font-semibold px-4 py-2 rounded hover:bg-red-600"
            >
              Pay loan
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AccountOperations;
