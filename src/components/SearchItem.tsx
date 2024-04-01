import React, { Dispatch, FormEvent, SetStateAction } from 'react'

type SearchItemProps = { 
    search: string; 
    setSearch: Dispatch<SetStateAction<string>>; 
}

const SearchItem = ({search, setSearch}: SearchItemProps) => {
  return (
    <form className='searchForm' onSubmit={e => e.preventDefault()}>
        <label htmlFor='search'>Search</label>
        <input
            id='search'
            type='text'
            role='searchbox'
            placeholder='Search Items'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchItem