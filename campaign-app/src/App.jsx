import { use, useState } from 'react'
import { CampaignForm } from './components/CampaignForm';
import './App.css'
import { CampaignList } from './components/CampaignList';

function App() {
  const [campaigns, setCampaigns] = useState([]);
  const [fund, setFund] = useState(300.0)

  const handleAddCampaign = (newCampaign) => {
    setCampaigns([...campaigns, newCampaign]);
    console.log("Added campaign", newCampaign)
  }

  return (
    <div>
      <h1>Add campaign</h1>
      <p>Fund: {fund.toFixed(2)} E</p>
      <CampaignForm onAdd={handleAddCampaign}/>

      <CampaignList campaigns={campaigns}/>

      {/* <h2>Campaign list:</h2>
      <ul>
        {campaigns.map((c, index)=>(
          <li key={index}>
              <strong>{c.name}</strong> - keywords: {c.keywords.join(", ")}, bid: {c.bid}, fund: {c.fund} E, radius: {c.radius} km, status: {c.status}
          </li>
        ))}
      </ul> */}
    </div>
  )
}

export default App
