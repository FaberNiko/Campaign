import { use, useState } from 'react'
import './App.css'

function App() {
  const [campaigns, setCampaigns] = useState([]);
  const [fund, setFund] = useState(300.0)

  return (
    <div>
      <h1>Campaign panel</h1>
      <p>Campaign fund: {fund.toFixed(2)} E</p>
    </div>
  )
}

export default App
