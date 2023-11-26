import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerms} = useGlobalContext()
  const searchValue = React.useRef('')
  React.useEffect(()=>{
    searchValue.current.focus()
  },[])
  const searchCocktail = ()=>{
    setSearchTerms(searchValue.current.value)
  }
  return (
    <section className='section search'>
      <form className='search-form'>
          <div className='form-control'>
            <label htmlFor='name'>Search your favorite cocktail</label>
            <input type='text' id='name' ref={searchValue} onChange={searchCocktail}></input>
          </div>
      </form>
    </section>
  )
}

export default SearchForm