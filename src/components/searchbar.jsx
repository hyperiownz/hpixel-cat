import react from 'react'

const SearchBar = () => {
  return (
    <form className='w-[440px] relative'>
        <div className="relative"> 
            <input type="search" placeholder='type here' className='w-full p-4 rounded-full bg-slate-800' />
        </div>
    </form>
  )
}

export default SearchBar