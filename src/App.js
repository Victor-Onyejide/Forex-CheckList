import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// --------------------
// Quotes Data
// --------------------
const quotes = [
  "I trade my plan. My strategy works over time. I do not let emotions control me.",
  "Every trade is just one of many. I am a disciplined and patient trader."
];

// --------------------
// Checklist Data
// --------------------
const checklistData = [
  {
    category: "Market Conditions",
    items: [
      {
        question: "Is the market trending or ranging?",
        yes: "If the market is trending, look for trades that align with the trend (e.g., buying in an uptrend or selling in a downtrend).",
        no: "If the market is ranging, focus on trading within the range, looking for buy opportunities at support and sell opportunities at resistance."
      },
      {
        question: "Are there any major news events coming up that could impact volatility?",
        yes: "Be cautious, as news can cause rapid price moves. Either wait until after the news event or be prepared for higher volatility.",
        no: "This is an ideal situation where you can focus on your technical setups without worrying about external factors."
      }
    ]
  },
  {
    category: "Trade Setup",
    items: [
      {
        question: "Is the trade aligned with the overall market trend?",
        yes: "Proceed with the trade, as trading with the trend generally increases your probability of success.",
        no: "Avoid taking the trade unless you have a specific counter-trend strategy (like a reversal pattern)."
      },
      {
        question: "Have I identified clear support or resistance zones?",
        yes: "A clear support or resistance zone adds strength to your setup, increasing the probability of a successful trade.",
        no: "Do not enter the trade. Wait until clear support or resistance is formed for better risk/reward."
      },
      {
        question: "Is there a candlestick pattern signaling a valid entry (e.g., engulfing, pin bar, etc.)?",
        yes: "Proceed with caution, as a candlestick pattern confirms your trade's potential.",
        no: "Do not take the trade. Candlestick patterns give you confirmation of price action."
      }
    ]
  },
  {
    category: "Entry Criteria",
    items: [
      {
        question: "Has price confirmed the setup at the identified support or resistance level?",
        yes: "If price confirms the setup, you can confidently enter the trade.",
        no: "Avoid entering the trade; wait for confirmation at the support or resistance level."
      },
      {
        question: "Is the entry confirmed by a valid candlestick pattern or price action signal?",
        yes: "If confirmed, this strengthens your decision to enter the trade.",
        no: "Do not enter the trade until you see a confirmation pattern."
      },
      {
        question: "Are the 20, 50, and 200 EMAs aligned in the direction of the trade?",
        yes: "This alignment gives additional confirmation that the market is in the right direction.",
        no: "Reconsider entering the trade, especially if the EMAs are not aligned with your trade direction."
      }
    ]
  },
  {
    category: "Risk Management",
    items: [
      {
        question: "Have I calculated my position size based on my risk tolerance?",
        yes: "You’re managing risk well, and the position size is set within your risk tolerance.",
        no: "Recalculate your position size to ensure you’re not risking more than you can afford to lose."
      },
      {
        question: "Is the risk per trade less than my maximum limit (e.g., no more than 1-2% of the account balance)?",
        yes: "You’re following your risk management rules. Go ahead with the trade.",
        no: "Do not take the trade or adjust your position size to lower the risk."
      },
      {
        question: "Is my stop loss placed at a logical level based on support/resistance or volatility?",
        yes: "The stop loss is well-placed, and the risk is controlled.",
        no: "Reposition the stop loss to a better level before entering the trade."
      },
      {
        question: "Is my take profit target reasonable?",
        yes: "The take profit target is realistic based on market conditions and levels.",
        no: "Reassess your target to ensure it is achievable based on price action or historical levels."
      }
    ]
  },
  {
    category: "Trade Monitoring",
    items: [
      {
        question: "Have I set alerts or reminders to monitor the trade after entry?",
        yes: "Monitoring is essential for active management, and alerts help keep you on track.",
        no: "Set alerts and reminders to make sure you’re not neglecting the trade."
      },
      {
        question: "Am I prepared to exit if price action shows signs of reversal or if the trade goes against me?",
        yes: "You're prepared to handle the trade's adverse movements.",
        no: "Be more aware of price action. Set up a plan for quick exits if needed."
      },
      {
        question: "Is my emotional state stable and not influencing my decision-making? (e.g., not chasing a trade out of FOMO)",
        yes: "You're in the right mindset to trade without being emotionally influenced.",
        no: "Avoid trading if you're feeling anxious, excited, or fearful. Emotions cloud judgment and increase risk."
      }
    ]
  },
  {
    category: "Post-Trade Review",
    items: [
      {
        question: "Did I stick to my strategy throughout the trade?",
        yes: "Great! Consistency is key to success. Reflect on what worked well.",
        no: "Reflect on what went wrong and identify what led you to deviate from your strategy."
      },
      {
        question: "Did I exit at the right time (TP/SL or manual exit based on price action)?",
        yes: "Your exit strategy was successful.",
        no: "Analyze why you exited early or late. Adjust your future exits to be more in line with your strategy."
      },
      {
        question: "What can I learn from this trade to improve my strategy for next time?",
        yes: "Reflect and take notes on what worked. What can you improve in your next trade?",
        no: "Focus on where you went wrong and how to adjust your plan."
      }
    ]
  }
];

// --------------------
// Checklist Page Component
// --------------------
const ChecklistPage = () => {
  // Initialize state: each question's answer is null initially (i.e., no answer selected)
  const [checklist, setChecklist] = useState(() => {
    const initialState = {};
    checklistData.forEach(category => {
      initialState[category.category] = category.items.map(() => null);
    });
    return initialState;
  });

  // Update answer for a given category and question index
  const updateSelection = (category, index, answer) => {
    setChecklist(prevState => {
      const updatedCategory = [...prevState[category]];
      updatedCategory[index] = answer;
      return { ...prevState, [category]: updatedCategory };
    });
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Forex Strategy Checklist</h1>

      {/* Navigation Links */}
      <nav style={{ marginBottom: '2rem' }}>
        <Link to="/strategy-breakdown" style={{ marginRight: '1rem' }}>View Trading Strategy Breakdown</Link>
      </nav>

      {/* Quotes Section */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginBottom: '2rem'
      }}>
        {quotes.map((quote, index) => (
          <div
            key={index}
            style={{
              flex: '1 1 300px',
              margin: '1rem',
              padding: '1rem',
              border: '1px solid #ddd',
              borderRadius: '8px',
              backgroundColor: '#f9f9f9'
            }}
          >
            <p style={{ fontStyle: 'italic', textAlign: 'center' }}>{quote}</p>
          </div>
        ))}
      </div>

      {/* Checklist Section */}
      {checklistData.map((cat, catIndex) => (
        <div key={catIndex} style={{ marginBottom: '2rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
          <h2>{cat.category}</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cat.items.map((item, index) => (
              <li key={index} style={{ marginBottom: '1rem' }}>
                <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>{item.question}</p>
                <div>
                  <label style={{ marginRight: '1rem' }}>
                    <input
                      type="radio"
                      name={`category-${catIndex}-item-${index}`}
                      value="yes"
                      checked={checklist[cat.category][index] === "yes"}
                      onChange={() => updateSelection(cat.category, index, "yes")}
                      style={{ marginRight: '0.3rem' }}
                    />
                    Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      name={`category-${catIndex}-item-${index}`}
                      value="no"
                      checked={checklist[cat.category][index] === "no"}
                      onChange={() => updateSelection(cat.category, index, "no")}
                      style={{ marginRight: '0.3rem' }}
                    />
                    No
                  </label>
                </div>
                {checklist[cat.category][index] === "yes" && (
                  <p style={{ color: 'green', marginTop: '0.5rem' }}>{item.yes}</p>
                )}
                {checklist[cat.category][index] === "no" && (
                  <p style={{ color: 'red', marginTop: '0.5rem' }}>{item.no}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <h2>Chart Oview</h2>
        <div class="form-group">
        <label for="exampleFormControlTextarea1">Example textarea</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
    </div>
  );
};

// --------------------
// Strategy Breakdown Component
// --------------------
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

// --------------------
// Main App Component with Routing
// --------------------
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
