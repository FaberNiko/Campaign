import React, { useState } from "react";
import { KeywordSelect } from "./KeywordSelect";
import "../styles/CampaignForm.scss";

export const CampaignForm = ({ onAdd }) => {
	const [keywords, setKeywords] = useState([]);
	const [bid, setBid] = useState("");
	const [fund, setFund] = useState("");
	const [status, setStatus] = useState("");
	const [city, setCity] = useState("");
	const [radius, setRadius] = useState("");
	const [name, setName] = useState("");

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
			<h1>Add campaign</h1>
			<form onSubmit={handleSubmit}>
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
					step="any"
					value={bid}
					onChange={e => setBid(e.target.value)}
					required
				/>

				<label>Campaign fund</label>
				<input
					type="number"
					value={fund}
					onChange={e => setFund(e.target.value)}
					required
				/>

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

				<button type="submit">Add campaign</button>
			</form>
		</>
	);
};
