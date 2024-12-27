import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { LayoutComponent } from "./components/Layout";
import { Schedule } from './pages/Schedule';
import { ConfirmationPage } from './pages/ConfirmationPage';
import { AppointmentManagement } from './pages/AppointmentManagement';
import { CancellationPage } from './pages/CancellationPage';

function App() {

  return (
    <Router>
      <LayoutComponent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agendar" element={<Schedule />} />
          <Route path="/gestion-citas" element={<AppointmentManagement />} />
          <Route path="/confirmacion" element={<ConfirmationPage />} />
          <Route path="/cancelacion" element={<CancellationPage />} />
        </Routes>
      </LayoutComponent>
    </Router>
  )
}

export default App
