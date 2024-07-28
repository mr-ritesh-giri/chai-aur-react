import React from "react";

function InputBox({
  label,
  amount,
  amountChanged,
  currency,
  onCurrencyChange,
  currencyOptions = [],
  className = "",
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          value={amount}
          onChange={amountChanged}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          value={currency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
        >
          {currencyOptions.map((currencyOption) => (
            <option key={currencyOption} value={currencyOption}>
              {currencyOption}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
