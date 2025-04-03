import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import Home from "./pages/home";
import About from "./pages/about";

function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap all pages inside the Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
