import React, { useState } from "react";
import "../styles/CampaignList.scss";

export const CampaignList = ({ campaigns, onOpenModal, activeFund }) => {
	return (
		<div className="campaign-list">
			<button className="openBtn" onClick={onOpenModal}>
				Add campaign
			</button>
			<h2>Campaign list:</h2>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Keywords</th>
						<th>Bid</th>
						<th>Radius (km)</th>
						<th>Status</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{campaigns.length === 0 ? (
						<tr>
							<td colSpan="6" style={{ textAlign: "center", padding: "1rem" }}>
								No active campaigns
							</td>
						</tr>
					) : (
						campaigns.map((c, index) => (
							<tr key={index}>
								<td data-label="Name">{c.name}</td>
								<td data-label="Keywords">{c.keywords.join(", ")}</td>
								<td data-label="Bid">{c.bid} E</td>
								<td data-label="Radius">{c.radius} km</td>
								<td data-label="Status">{c.status}</td>
								<div className="buttonsBox">
									<button className="editBtn">Edit</button>
									<button className="deleteBtn">Delete</button>
								</div>
							</tr>
						))
					)}
				</tbody>
			</table>
		</div>
	);
};
