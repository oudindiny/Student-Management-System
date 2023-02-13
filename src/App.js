import "./App.css";
import MainPage from "./pages/MainPage";
import InputPhoneNunber from "./pages/InputPhoneNunber";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<InputPhoneNunber />} />
          <Route path="/Main" element={<MainPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
