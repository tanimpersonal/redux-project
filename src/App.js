import { Route, Routes } from "react-router-dom";
import "tw-elements";
import Homepage from "./Components/Homepage/Homepage";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
      </Routes>
    </>
  );
}

export default App;
