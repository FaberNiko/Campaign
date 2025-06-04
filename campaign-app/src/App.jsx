import { useState } from "react";
import { CampaignForm } from "./components/CampaignForm";
import "./styles/App.scss";
import { CampaignList } from "./components/CampaignList";
import { initialFund } from "./data/data";

function App() {
	const [campaigns, setCampaigns] = useState([]);
	const [fund, setFund] = useState(initialFund);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [editingIndex, setEditingIndex] = useState(null);
	const [editingCampaign, setEditingCampaign] = useState(null);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => {
		setIsModalOpen(false);
		setEditingIndex(null);
		setEditingCampaign(null)
	}

	const handleAddOrUpdateCampaign = campaign => {
		if (editingIndex !== null) {
			const prev = campaigns[editingIndex]
			const bidDiff = prev.bid - campaign.bid

			const updated = [...campaigns];
			updated[editingIndex] = campaign;
			setCampaigns(updated);
			setEditingIndex(null);
			setEditingCampaign(null);
			setFund(fund + bidDiff)
		} else {
			// Dodanie nowej
			setCampaigns([...campaigns, campaign]);
			setFund(fund - campaign.bid); 
		}
	};
	const handleDeleteCampaign = indexToDelete => {
		setCampaigns(prev => prev.filter((_, index) => index !== indexToDelete));
	};

	return (
		<div className="content">
			<h1>Campaign Panel</h1>
			<p>Active fund: {fund.toFixed(2)}E</p>
			<CampaignList
				campaigns={campaigns}
				onOpenModal={openModal}
				activeFund={fund}
				onDelete={handleDeleteCampaign}
				onEdit={index => {
					setEditingIndex(index);
					setEditingCampaign(campaigns[index]);
					openModal()
				}}
			/>
			{isModalOpen && (
				<div className="modal-backdrop">
					<div className="modal">
						<CampaignForm
							onAdd={handleAddOrUpdateCampaign}
							editingCampaign={editingCampaign}
							onCloseModal={closeModal}
							activeFund={fund}
						/>
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
