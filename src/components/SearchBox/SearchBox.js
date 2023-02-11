import React from 'react'
import './SearchBox.css'

const SearchBox = ({ handleFindHomes}) => {
  const fakeProps= ['name 1', 'name 2', 'name 3', 'name fro']

  return (
    <div>
      <form className='search-box-container'>
        <select>
          <option defaultValue="placeholder">Search by city</option>
          {
            fakeProps.map(
              (item) => {
                console.log({item})
                return <option  value={item}>{item}</option>
              }
            )
          }
          
        </select>
        <select>
          <option defaultValue="placeholder">Any Bedroom</option>
          <option value="placeholder">1</option>
          <option value="placeholder">2</option>
          <option value="placeholder">3</option>
        </select>
        <input type="submit" value="Find Homes" onClick={handleFindHomes} />
      </form>
    </div>
  )
}

export default SearchBox