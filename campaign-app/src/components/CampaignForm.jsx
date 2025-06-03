import React from 'react'

export const CampaignForm = () => {
  return (
    <form>
        <label>Campaign name</label>
        <input type="text" required/>

        <label>Keywords</label>
        <input type="text" placeholder='e.g. jacket, dress, pants ' required/>

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
