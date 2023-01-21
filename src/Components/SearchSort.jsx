import React from 'react'
import { useState } from "react";
import '../index.css';

function SearchSort() {
  const [sort, setSort] = useState("Recommended");

  const handleChange = (event) => {
    setSort(event.target.value)
  }
  return (
    <div className='ss-container'>
      <div className='sort-container'>
      <form>
        <select className='sorter' value={sort} onChange={handleChange}>
          <option value="Recommended">Recommended</option>
          <option value="Name">Name</option>
          <option value="Nearby">Nearby</option>
        </select>
      </form>
      </div>
      <div className='search-container'>
        <input type="text" className='search-input' placeholder='search'></input>
        <button className='search-btn'>Search</button>
      </div>
    </div>
  )
}

export default SearchSort