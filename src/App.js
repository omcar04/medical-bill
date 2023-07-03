import "./App.css";
import Home from "./components/Home";
import InputForm from "./components/InputForm";
import EditForm from "./components/EditForm";
import ReviewForm from "./components/ReviewForm";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inputform" element={<InputForm />} />
        <Route path="/reviewform/:id" element={<ReviewForm />} />
        <Route path="/editform/:id" element={<EditForm />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
