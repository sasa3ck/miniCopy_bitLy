import { BrowserRouter as Router } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import AppRoutes from "./routes/AppRouites";

function App() {
  return (
    <Router>
      <Header />
      <div className="container main">
        <AppRoutes />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
