import { use, useState } from "react";
import { CampaignForm } from "./components/CampaignForm";
import './styles/App.scss'
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
			<CampaignList campaigns={campaigns} />
			<CampaignForm onAdd={handleAddCampaign} />
		</div>
	);
}

export default App;
