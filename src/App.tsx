import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Task from "./pages/Task";
import Contact from "./pages/Contact";
import MainLayout from "./layouts/MainLayout";
import './App.css';

const App = () => {
  return (
    <>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tasks" element={<Task />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/taks" element={<Task />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
      </Router>
    </>
  );
};

export default App;
