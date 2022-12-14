import Navbar from "./components/navbar";
import Home from "./components/Home"
import Create from "./components/Create"
import Saved from "./components/Saved"
import Auth from "./components/Auth"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/create-post" element={<Create/>}></Route>
          <Route path="/saved-posts" element={<Saved/>}></Route>
          <Route path="/auth" element={<Auth/>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
