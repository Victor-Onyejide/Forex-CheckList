import { Link } from 'react-router-dom';

const StrategyBreakdown = () => (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <nav style={{ marginBottom: '2rem' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Back to Checklist</Link>
      </nav>
      <h1>Your Trading Strategy Breakdown</h1>
      <p>From your journal and previous discussions, here’s how I would summarize your strategy:</p>
  
      <h2>1. Entry Strategy</h2>
      <h3>✅ Indicators Used:</h3>
      <ul>
        <li><strong>20 EMA, 50 EMA, 200 EMA</strong> → You look for crossovers and price reactions to these moving averages.</li>
        <li><strong>Support & Resistance Zones</strong> → You enter trades near key levels.</li>
        <li>
          <strong>Candlestick Patterns</strong> → You rely on patterns like:
          <ul>
            <li><strong>Bullish Engulfing</strong> → For buy entries.</li>
            <li><strong>Bearish Engulfing</strong> → For sell entries.</li>
            <li><strong>Harami Cross</strong> → For potential reversals.</li>
          </ul>
        </li>
      </ul>
      <h3>✅ Timeframes Used:</h3>
      <ul>
        <li><strong>15-Minute Chart (Entry Confirmation)</strong> → You check for candlestick patterns here.</li>
        <li><strong>1-Hour Chart (Trend Direction & EMA Setup)</strong> → Confirms the overall trend.</li>
      </ul>
      <h3>✅ Entry Conditions:</h3>
      <h4>For Buys:</h4>
      <ul>
        <li>20 EMA crossing above 50 EMA (bullish signal).</li>
        <li>Price above the 200 EMA (long-term trend bullish).</li>
        <li>Strong bullish candlestick at support.</li>
      </ul>
      <h4>For Sells:</h4>
      <ul>
        <li>20 EMA crossing below 50 EMA (bearish signal).</li>
        <li>Price below the 200 EMA (long-term trend bearish).</li>
        <li>Strong bearish candlestick at resistance.</li>
      </ul>
  
      <h2>2. Risk Management</h2>
      <h3>✅ Stop-Loss (SL) & Take-Profit (TP):</h3>
      <ul>
        <li>SL is set near recent structure levels (below support for buys, above resistance for sells).</li>
        <li>
          TP is set based on:
          <ul>
            <li>A fixed risk-reward ratio (1:1 or 1:2).</li>
            <li>The next major support/resistance level.</li>
          </ul>
        </li>
      </ul>
      <h3>✅ Risk Per Trade:</h3>
      <ul>
        <li>You seem to use a fixed dollar amount for risk, rather than a percentage of your account.</li>
        <li>You sometimes exit manually before SL/TP hits.</li>
      </ul>
  
      <h2>3. Exit Strategy</h2>
      <h3>✅ When You Exit Trades:</h3>
      <ul>
        <li><strong>Take-Profit (Best Case):</strong> If price hits TP level.</li>
        <li><strong>Manual Exit (Common Issue):</strong> You sometimes exit early if price moves against you.</li>
        <li><strong>Stop-Loss (If Wrong):</strong> You accept losses when price hits SL.</li>
      </ul>
      <h3>🚨 Improvement Needed:</h3>
      <p>You manually exit trades often, which sometimes prevents full profit potential.</p>
  
      <h2>4. Trading Psychology & Weaknesses</h2>
      <h3>💡 Strengths:</h3>
      <ul>
        <li>You follow a structured approach using multiple confluences (EMA, candlesticks, support/resistance).</li>
        <li>You have a risk-reward focus and don’t risk too much per trade.</li>
        <li>You analyze your emotions after trades (good self-awareness).</li>
      </ul>
      <h3>⚠️ Weaknesses:</h3>
      <ul>
        <li>Exiting trades manually too early → Fear of losses.</li>
        <li>Ignoring some confirmations → Impulse trading.</li>
        <li>Chasing the market when setups don’t align → Overtrading risk.</li>
      </ul>
  
      <h2>Summary of Your Trading Strategy</h2>
      <ul>
        <li><strong>EMA-Based Trend Following:</strong> You use 20 EMA x 50 EMA crossovers as entry signals while considering the 200 EMA for trend direction.</li>
        <li><strong>Support & Resistance Trading:</strong> You enter trades near major support/resistance zones.</li>
        <li><strong>Candlestick Confirmation:</strong> You wait for strong bullish or bearish candlestick formations to confirm entries.</li>
        <li><strong>Risk-Reward Focused:</strong> You target 1:1 or 1:2 risk-reward ratios with structured SL & TP levels.</li>
        <li><strong>Psychology Needs Improvement:</strong> You sometimes exit too early, ignore confirmations, or chase trades when setups are unclear.</li>
      </ul>
    </div>
  );
  export default StrategyBreakdown;
  