import { BrowserRouter, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import UserStorage from "./context/UserContext";
import Home from "./pages/Home";
import Login from "./pages/Login";

import "./styles/global.scss";

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/login/:" component={Login} />
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
