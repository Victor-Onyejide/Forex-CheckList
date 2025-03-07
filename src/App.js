import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ChecklistPage from './pages/ChecklistPage';
import StrategyBreakdown from './pages/StrategyBreakdown';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChecklistPage />} />
        <Route path="/strategy-breakdown" element={<StrategyBreakdown />} />
      </Routes>
    </Router>
  );
}

export default App;
