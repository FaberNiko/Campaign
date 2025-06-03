import { use, useState } from "react";
import { CampaignForm } from "./components/CampaignForm";
import "./App.css";
import { CampaignList } from "./components/CampaignList";

function App() {
	const [campaigns, setCampaigns] = useState([]);
	const [fund, setFund] = useState(300.0);

	const handleAddCampaign = newCampaign => {
		setCampaigns([...campaigns, newCampaign]);
		console.log("Added campaign", newCampaign);
	};

	return (
		<div className="content">
			<h1>Add campaign</h1>
			<p>Fund: {fund.toFixed(2)} E</p>
			<CampaignForm onAdd={handleAddCampaign} />

			<CampaignList campaigns={campaigns} />
		</div>
	);
}

export default App;
