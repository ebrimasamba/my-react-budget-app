import React, { useState } from "react"
import { FaSearch } from "react-icons/fa"

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("")
  const searching = e => {
    setSearchValue(e.target.value)
    console.log(searchValue)
  }
  return (
    <div className="mt-3 text-sm relative">
      <input
        type="text"
        className="w-full p-3 rounded bg-transparent border-b"
        placeholder="Search your items"
        onChnage={searching}
      />
      <button className="absolute top-1/2 transform -translate-y-1/2 right-2 text-gray-400 p-2">
        <FaSearch></FaSearch>
      </button>
    </div>
  )
}
