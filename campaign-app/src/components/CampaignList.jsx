import React from "react";
import "../styles/CampaignList.scss";

export const CampaignList = ({ campaigns }) => {
	if (campaigns.length === 0) {
		return (
			<>
				<h2>Campaign list:</h2>
				<p>No campaigns</p>
			</>
		);
	}
	return (
		<div>
			<h2>Campaign list:</h2>
			<ul>
				{campaigns.map((c, index) => (
					<li key={index}>
						<h3>{c.name}</h3>
						<p>keywords: {c.keywords.join(", ")}</p>
						<p>bid: <strong>{c.bid}</strong></p>
						<p>fund: {c.fund} E</p>
						<p>radius: {c.radius} km</p>
						<p>status: {c.status}</p>
					</li>
				))}
			</ul>
		</div>
	);
};
