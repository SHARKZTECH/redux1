import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route>404 NOT FOUND</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
