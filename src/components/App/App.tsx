import { Routes, Route } from "react-router";
import { Suspense } from "react";
// import HomePage from "../../pages/HomePage/HomePage";
import "./App.css";

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>{/* <Route path="/" element={<HomePage />} /> */}</Routes>
      </Suspense>
    </>
  );
}

export default App;
