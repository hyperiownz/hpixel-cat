import react from 'react'
import './styles.css'

const SearchBar = (search, setSearch) => {
  
  const searchOnChange = (ev) => {
    setSearch(ev.target.value)
  }

  return (
    <form className="search-bar">
            <input type="search" value={search} placeholder='Drako dorado...' onInput={searchOnChange}/>
    </form>
  )
}

export default SearchBar