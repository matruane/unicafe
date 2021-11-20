import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const Display = ({ good, neutral, bad}) => {
  return (
    <div>
      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
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
      <Display good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
