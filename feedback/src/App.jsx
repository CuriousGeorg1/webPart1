import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const TotalFeedback = () => {
    return <p>Total feedback: {good + neutral + bad}</p>;
  };

  const AverageScore = () => {
    if (good + neutral + bad === 0) {
      return <p>Average score: 0</p>;
    }
    return <p>Average score: {(good - bad) / (good + neutral + bad)}</p>;
  };

  const PositivePercentage = () => {
    if (good + neutral + bad === 0) {
      return <p>Positive percentage: Not enough data</p>;
    }
    return <p>Positive percentage: {(good / (good + neutral + bad)) * 100}%</p>;
  };

  const Good = () => {
    return <p>Good: {good}</p>;
  };

  const Neutral = () => {
    return <p>Neutral: {neutral}</p>;
  };

  const Bad = () => {
    return <p>Bad: {bad}</p>;
  };

  const Statistics = () => {
    return (
      <div>
        <h1>Give feedback</h1>
        <button onClick={() => setGood(good + 1)}>Good</button>
        <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
        <button onClick={() => setBad(bad + 1)}>Bad</button>

        <Good />
        <Neutral />
        <Bad />

        <div>
          <h1>Statistics</h1>
          <TotalFeedback />
          <AverageScore />
          <PositivePercentage />
        </div>
      </div>
    );
  };

  return (
    <div>
      <Statistics />
    </div>
  );
};

export default App;
