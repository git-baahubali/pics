import React, { useState } from 'react'
import SearchImages from '../api.js'

function SearchBar(props) {
  const [input, setInput] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const input = event.target.children.term.value
    props.onSubmit(input)
    
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="term" />
      </form>
    </div>
  )
}

export default SearchBar
