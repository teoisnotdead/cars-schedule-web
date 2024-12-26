import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { LayoutComponent } from "./components/Layout";
import { Schedule } from './pages/Schedule';
import { ConfirmationPage } from './pages/ConfirmationPage';

function App() {

  return (
    <Router>
      <LayoutComponent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agendar" element={<Schedule />} />
          <Route path="/confirmacion" element={<ConfirmationPage />} />
        </Routes>
      </LayoutComponent>
    </Router>
  )
}

export default App
