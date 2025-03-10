import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ChecklistPage from './pages/ChecklistPage';
import StrategyBreakdown from './pages/StrategyBreakdown';
import EMADistanceSymbols from './pages/EMAAnalysis';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChecklistPage />} />
        <Route path="/strategy-breakdown" element={<StrategyBreakdown />} />
        <Route path="/ema" element={<EMADistanceSymbols />}/>
      </Routes>
    </Router>
  );
}

export default App;
