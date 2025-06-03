import React, { useState } from 'react'
import { KeywordSelect } from './KeywordSelect'
import '../styles/CampaignForm.scss'

export const CampaignForm = ({onAdd}) => {
    const [keywords, setKeywords] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (keywords.length === 0) {
            alert('Chose at least one keyword!')
            return;
        }

        onAdd({keywords});
    }
  return (
    <form onSubmit={handleSubmit}>
        <label>Campaign name</label>
        <input type="text" required/>

        <KeywordSelect selected={keywords} setSelected={setKeywords}/>

        <label>Bid amount</label>
        <input type="number" min="0.1" required/>
        
        <label>Campaign fund</label>
        <input type="number" required/>

        <label>Status</label>
        <select required>
            <option value="on">Enabled</option>
            <option value="off">Disabled</option>
        </select>

        <label>City</label>
        <select>
            <option>Krakow</option>
            <option>Warsaw</option>
            <option>Wroclaw</option>
            <option>Gdansk</option>
            <option>Katowice</option>
        </select>

        <label>Radius (km)</label>
        <input type='number'/>

        <button type='submit'>Add campaign</button>
    </form>
  )
}
