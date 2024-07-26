import { useState, useEffect } from "react";
import InputBox from "./Components";
import useCurrencyInfo from "./Hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amountChanged, setAmountChanged] = useState(0);

  const currencyInfo = useCurrencyInfo(from) || {};
  const options = currencyInfo ? Object.keys(currencyInfo) : [];

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  const convert = () => {
    if (currencyInfo[to]) {
      setAmountChanged(amount * currencyInfo[to]);
    }
  };

  useEffect(() => {
    convert();
  }, [amount, from, to, currencyInfo]);

  return (
    <>
      <div className="flex content-center items-center">
        <div
          className="w-full h-screen bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1493080/pexels-photo-1493080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
          }}
        ></div>
        <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1591033594798-33227a05780d?q=80&w=1959&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}
        >
          <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  convert();
                }}
              >
                <div className="w-full mb-1">
                  <InputBox
                    label="From"
                    amount={amount}
                    currencyOptions={options}
                    selectCurrency={from}
                    onCurrencyChange={(currency) => setAmount(currency)}
                    onAmountChange={(amount) => setAmount(amount)}
                  />
                </div>
                <div className="relative w-full h-0.5">
                  <button
                    type="button"
                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                    onClick={swap}
                  >
                    swap
                  </button>
                </div>
                <div className="w-full mt-1 mb-4">
                  <InputBox
                    label="To"
                    amount={amountChanged}
                    currencyOptions={options}
                    onCurrencyChange={(currency) => setTo(currency)}
                    selectCurrency={to}
                    amountDisable
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                >
                  Convert {from} to {to}
                  {/* Convert {from.toUpperCase()} to {to.toUpperCase()} */}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
