import { useState } from "react";
import { keywords as allKeywords } from "../data/keywords";
import '../styles/KeywordSelect.scss'

export const KeywordSelect = ({ selected = [], setSelected }) => {
	const [query, setQuery] = useState("");

	const filtered = allKeywords.filter(
		k => k.toLowerCase().includes(query.toLowerCase()) && !selected.includes(k)
	);

	const addKeyword = keyword => {
		setSelected([...selected, keyword]);
		setQuery("");
	};

	const removeKeyword = keyword => {
		setSelected(selected.filter(k => k !== keyword));
	};
	return (
		<div className="keyword-select">
			<label>Keywords</label>
			<input
				type="text"
				value={query}
				onChange={e => setQuery(e.target.value)}
				placeholder="e.g. jacket, dress, pants"
			/>
            {query && filtered.length > 0 && (
                <ul className="suggestions">
                    {filtered.map(k => (
                        <li key={k} onClick={() => addKeyword(k)}>{k}</li>
                    ))}
                </ul>
            )}

            <div className="selected">
                {selected.map(k => (
                    <span key={k} className="tag">
                        {k}
                        <button onClick={() => removeKeyword(k)}>x</button>
                    </span>
                ))}
            </div>
		</div>
	);
};
