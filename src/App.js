import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/mainComponent";
import AboutCharecter from "./pages/aboutCharecter";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path={"/char/:id"} element={<AboutCharecter />} />
      </Routes>
    </>
  );
}
export default App;
