import React from 'react'
import './SearchBox.css'

const SearchBox = () => {
  return (
    <div>
      <form className='search-box-container'>
        <select>
          <option selected value="placeholder">Search by city</option>
          <option value="placeholder">1</option>
          <option value="placeholder">2</option>
          <option value="placeholder">3</option>
        </select>
        <select>
          <option selected value="placeholder">Any Bedroom</option>
          <option value="placeholder">1</option>
          <option value="placeholder">2</option>
          <option value="mango">3</option>
        </select>
        <input type="submit" value="Find Homes" />
      </form>
    </div>
  )
}

export default SearchBox