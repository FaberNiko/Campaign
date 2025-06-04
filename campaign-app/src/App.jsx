import { use, useState } from "react";
import { CampaignForm } from "./components/CampaignForm";
import "./styles/App.scss";
import { CampaignList } from "./components/CampaignList";

function App() {
	const [campaigns, setCampaigns] = useState([]);
	const [fund, setFund] = useState(300.0);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false)

	const handleAddCampaign = newCampaign => {
		setCampaigns([...campaigns, newCampaign]);
		setFund(prev => prev - newCampaign.bid)
		console.log("Added campaign", newCampaign);
	};

	return (
		<div className="content">
			<h1>Campaign Panel</h1>
			<p>Active fund: {fund.toFixed(2)}E</p>
			<CampaignList campaigns={campaigns} onOpenModal={openModal} activeFund = {fund}/>
			{isModalOpen && (
				<div className="modal-backdrop">
					<div className="modal">
						<CampaignForm onAdd={handleAddCampaign} onCloseModal = {closeModal} activeFund = {fund}/>
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
