import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const StatisticLine = ({ text, value }) => (
  <tr><td>{text}</td><td>{value}</td></tr>
)

const Statistics = ({ good, neutral, bad }) => {
  let total = good + neutral + bad
  let average = (good / total) - (bad / total)
  let positivePct = `${good / total * 100} %`

  if (total != null && total > 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={total} />
            <StatisticLine text="average" value={average} />
            <StatisticLine text="positive" value={positivePct} />
          </tbody>
        </table>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Statistics</h1>
        No feedback given
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handler = (newValue, toSet) => {
    toSet(newValue)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => handler(good + 1, setGood)} text="good" />
      <Button handleClick={() => handler(neutral + 1, setNeutral)} text="neutral" />
      <Button handleClick={() => handler(bad + 1, setBad)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
