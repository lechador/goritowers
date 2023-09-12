'use client'
import { useState } from 'react';
import ComponentTitle from './componentTitle';

const LoanCalc = () => {
  const [principal, setPrincipal] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateMonthlyPayment = () => {
    if (!principal || !interestRate || !loanTerm) {
      alert('შეიყვანეთ სასურველი პირობები');
      return;
    }

    // Convert interest rate from percentage to decimal
    const monthlyInterestRate = (parseFloat(interestRate) / 100) / 12;
    const numberOfPayments = parseFloat(loanTerm) * 12;
    const loanAmount = parseFloat(principal);

    // Calculate monthly payment using the formula
    const monthlyPaymentResult =
      (loanAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    setMonthlyPayment(monthlyPaymentResult.toFixed(2));
  };

  return (
    <div data-theme='garden' className='py-6'>
      <div className="p-4 max-w-sm m-auto">
        <ComponentTitle title='იპოთეკური სესხის კალკულატორი' />
        <div className="mb-4">
          <label className="block text-md font-medium">სესხის თანხა (₾)</label>
          <input
            type="number"
            className="border rounded-md px-3 py-2 w-full"
            value={principal}
            placeholder='100000'
            onChange={(e) => setPrincipal(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-md font-medium">წლიური საპროცენტო განაკვეთი (%)</label>
          <input
            type="number"
            className="border rounded-md px-3 py-2 w-full"
            value={interestRate}
            placeholder='7.8'
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-md font-medium">სესხის ვადა (წელი)</label>
          <input
            type="number"
            className="border rounded-md px-3 py-2 w-full"
            value={loanTerm}
            placeholder='10'
            onChange={(e) => setLoanTerm(e.target.value)}
          />
        </div>
        <button
          className="py-2 px-4 rounded-md transition duration-300 bg-orange-700	text-white"
          onClick={calculateMonthlyPayment}
        >
          ყოველთვიური გადასახადის გამოთვლა
        </button>
        {monthlyPayment !== null && (
          <div className="mt-4">
            <p className="text-lg font-semibold">ყოველთვიური გადასახადი: ₾{monthlyPayment}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoanCalc;
