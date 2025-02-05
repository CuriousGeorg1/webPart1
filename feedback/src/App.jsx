import { useState } from "react";

const FeedbackCount = ({ label, count }) => {
  return (
    <p>
      {label}: {count}
    </p>
  );
};

const TotalFeedback = ({ good, neutral, bad }) => {
  return <p>Total feedback: {good + neutral + bad}</p>;
};

const AverageScore = ({ good, neutral, bad }) => {
  if (good + neutral + bad === 0) {
    return <p>Average score: 0</p>;
  }
  return <p>Average score: {(good - bad) / (good + neutral + bad)}</p>;
};

const PositivePercentage = ({ good, neutral, bad }) => {
  if (good + neutral + bad === 0) {
    return <p>Positive percentage: Not enough data</p>;
  }
  return <p>Positive percentage: {(good / (good + neutral + bad)) * 100}%</p>;
};

const Statistics = ({ good, neutral, bad }) => {
  console.log(good, neutral, bad);
  const totalFeedback = good + neutral + bad;

  if (totalFeedback === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <div>
      <h1>Statistics</h1>
      <TotalFeedback good={good} neutral={neutral} bad={bad} />
      <AverageScore good={good} neutral={neutral} bad={bad} />
      <PositivePercentage good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>

      <FeedbackCount label="Good" count={good} />
      <FeedbackCount label="Neutral" count={neutral} />
      <FeedbackCount label="Bad" count={bad} />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
