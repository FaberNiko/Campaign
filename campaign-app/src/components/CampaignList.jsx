import React from "react";

export const CampaignList = ({campaigns}) => {
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
						<strong>{c.name}</strong> - keywords: {c.keywords.join(", ")}, bid:{" "}
						{c.bid}, fund: {c.fund} E, radius: {c.radius} km, status: {c.status}
					</li>
				))}
			</ul>
		</div>
	);
};
