import { useState } from "react";

export default function App() {
  const [Color, setColor] = useState("lavender");
  return (
    <>
      <div
        className="bg-black h-screen w-full text-white"
        style={{ backgroundColor: Color }}
      >
        <div className="fixed bottom-5 w-full flex flex-wrap justify-center ">
          <div className="px-2 py-1 bg-[#F7DD72] rounded-md">
            <button
              className="p-3 shadow-3xl"
              onClick={() => setColor("#FF0000")}
            >
              <h2
                className="text-xl  px-6 py-2 rounded-md text-white "
                style={{ backgroundColor: "#FF0000" }}
              >
                Red
              </h2>
            </button>
            <button
              className="p-3 shadow-3xl"
              onClick={() => setColor("#FFA500")}
            >
              <h2
                className="text-xl  px-6 py-2 rounded-md text-white "
                style={{ backgroundColor: "#FFA500" }}
              >
                Orange
              </h2>
            </button>
            <button
              className="p-3 shadow-3xl"
              onClick={() => setColor("#FFFF00")}
            >
              <h2
                className="text-xl  px-6 py-2 rounded-md text-white "
                style={{ backgroundColor: "#FFFF00" }}
              >
                Yellow
              </h2>
            </button>
            <button
              className="p-3 shadow-3xl"
              onClick={() => setColor("#008000")}
            >
              <h2
                className="text-xl  px-6 py-2 rounded-md text-white "
                style={{ backgroundColor: "#008000" }}
              >
                Green
              </h2>
            </button>
            <button
              className="p-3 shadow-3xl"
              onClick={() => setColor("#0000FF")}
            >
              <h2
                className="text-xl  px-6 py-2 rounded-md text-white "
                style={{ backgroundColor: "#0000FF" }}
              >
                Blue
              </h2>
            </button>
            <button
              className="p-3 shadow-3xl"
              onClick={() => setColor("#4B0082")}
            >
              <h2
                className="text-xl  px-6 py-2 rounded-md text-white "
                style={{ backgroundColor: "#4B0082" }}
              >
                Indigo
              </h2>
            </button>
            <button
              className="p-3 shadow-3xl"
              onClick={() => setColor("#EE82EE")}
            >
              <h2
                className="text-xl  px-6 py-2 rounded-md text-white "
                style={{ backgroundColor: "#EE82EE" }}
              >
                Violet
              </h2>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
