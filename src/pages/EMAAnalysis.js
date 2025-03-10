import React from "react";

const EMADistanceSymbols = () => {
  return (
    <div style={{ padding: "1rem", fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      <h2>New Symbols for EMA Distance</h2>
      <ul>
        <li>
          <strong>&lt;&lt;&lt;</strong> → Far Below (Significant bearish separation)
          <p>Example: 50 EMA &lt;&lt;&lt; 200 EMA (Strong downtrend)</p>
        </li>
        <li>
          <strong>&gt;&gt;&gt;</strong> → Far Above (Significant bullish separation)
          <p>Example: 20 EMA &gt;&gt;&gt; 50 EMA (Very strong short-term uptrend)</p>
        </li>
        <li>
          <strong>=&lt;</strong> → Gradually Approaching from Below
          <p>Example: 50 EMA =&lt; 200 EMA (50 EMA is closing in on 200 EMA but still below)</p>
        </li>
        <li>
          <strong>=&gt;</strong> → Gradually Approaching from Above
          <p>Example: 20 EMA =&gt; 50 EMA (20 EMA is coming down but still above 50 EMA)</p>
        </li>
      </ul>

      <h3>How Distance Affects Market Analysis</h3>
      <h4>Wide separation (&lt;&lt;&lt; or &gt;&gt;&gt;)</h4>
      <ul>
        <li>Indicates a strong trend with momentum.</li>
        <li>If EMAs are widening apart, trend continuation is likely.</li>
        <li>If EMAs are too far apart, it may signal an overextended market that could lead to a pullback.</li>
      </ul>

      <h4>Narrow distance (≈&lt; or ≈&gt;)</h4>
      <ul>
        <li>Signals potential consolidation or trend weakness.</li>
        <li>If EMAs start tightening, it could indicate a possible trend reversal or range-bound market.</li>
      </ul>

      <h4>Gradual approach (=&lt; or =&gt;)</h4>
      <ul>
        <li>If a shorter EMA is moving closer to a longer EMA, it can suggest a possible trend change.</li>
        <li>
          Example: 50 EMA =&lt; 200 EMA could mean the market is recovering from a downtrend.
        </li>
      </ul>

      <h3>Example Market Scenario</h3>
      <p>
        <strong>20 EMA &gt;&gt;&gt; 50 EMA, but 50 EMA ≈&lt; 200 EMA</strong>
      </p>
      <p>
        This means strong short-term bullish momentum, but the medium-term trend has not fully turned bullish yet.
      </p>
      <p>
        <strong>50 EMA =&lt; 200 EMA</strong>
      </p>
      <p>
        This suggests the market is trying to reverse a long-term downtrend, but confirmation is needed.
      </p>
    </div>
  );
};

export default EMADistanceSymbols;
