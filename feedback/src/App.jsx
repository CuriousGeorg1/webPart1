import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ label, count }) => {
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
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    );
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
      <Button onClick={() => setGood(good + 1)} text="Good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button onClick={() => setBad(bad + 1)} text="Bad" />

      <StatisticLine label="Good" count={good} />
      <StatisticLine label="Neutral" count={neutral} />
      <StatisticLine label="Bad" count={bad} />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
