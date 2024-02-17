// import logo from './logo.svg';
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header.js";
import HomePage from "./pages/HomePage.js";
import TestPage from "./pages/TestPage.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/data" element={<TestPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
