import Invoice from "./invoice/Invoice";
import Sidebar from "./sidebar/Sidebar";

function App() {
  return (
    <>
      <div className="border border-black bg-gray-300">
        <div className="m-10">
          <div className=" inline-block w-3/4">
            <Invoice />
          </div>
          <div className=" inline-block ml-10 align-top">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
