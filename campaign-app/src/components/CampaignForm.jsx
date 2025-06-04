import React, { useState, useEffect } from "react";
import { KeywordSelect } from "./KeywordSelect";
import "../styles/CampaignForm.scss";

export const CampaignForm = ({ onAdd, onCloseModal, activeFund, editingCampaign }) => {
	const [keywords, setKeywords] = useState([]);
	const [bid, setBid] = useState("");
	const [fund, setFund] = useState("");
	const [status, setStatus] = useState("");
	const [city, setCity] = useState("");
	const [radius, setRadius] = useState("");
	const [name, setName] = useState("");

	const maxBid = editingCampaign ? editingCampaign.bid + activeFund : activeFund;

	useEffect(() => {
		if (editingCampaign) {
			setKeywords(editingCampaign.keywords);
			setBid(editingCampaign.bid);
			setFund(editingCampaign.fund);
			setStatus(editingCampaign.status);
			setCity(editingCampaign.city);
			setRadius(editingCampaign.radius);
			setName(editingCampaign.name);
		}
	}, [editingCampaign]);

	const handleSubmit = e => {
		e.preventDefault();
		if (keywords.length === 0) {
			alert("Chose at least one keyword!");
			return;
		}

		onAdd({
			keywords,
			name,
			bid: parseFloat(bid),
			fund: parseFloat(fund),
			status,
			city,
			radius: parseInt(radius),
		});

		onCloseModal();
		setName("");
		setKeywords([]);
		setBid("");
		setFund("");
		setStatus("");
		setCity("");
		setRadius("");
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="buttonBox">
					<button className="closeBtn" onClick={onCloseModal}>X</button>
				</div>
				<label>Campaign name</label>
				<input
					type="text"
					value={name}
					onChange={e => setName(e.target.value)}
					required
				/>

				<KeywordSelect selected={keywords} setSelected={setKeywords} />

				<label>Bid amount</label>
				<input
					type="number"
					min="0.1"
					max={maxBid}
					step="any"
					value={bid}
					onChange={e => setBid(e.target.value)}
					required
				/>

				<label>Campaign fund</label>
				<input type="number" value={activeFund} required  readOnly/>

				<label>Status</label>
				<select
					value={status}
					onChange={e => setStatus(e.target.value)}
					required>
					<option value="" disabled hidden>
						Select status...
					</option>
					<option value="on">Enabled</option>
					<option value="off">Disabled</option>
				</select>

				<label>City</label>
				<select value={city} onChange={e => setCity(e.target.value)}>
					<option value="" disabled hidden>
						Select city...
					</option>
					<option>Krakow</option>
					<option>Warsaw</option>
					<option>Wroclaw</option>
					<option>Gdansk</option>
					<option>Katowice</option>
				</select>

				<label>Radius (km)</label>
				<input
					type="number"
					min={0}
					value={radius}
					onChange={e => setRadius(e.target.value)}
					required
				/>
				<button type="submit">{editingCampaign ? "Save" : "Add campaign"}</button>
			</form>
		</>
	);
};
