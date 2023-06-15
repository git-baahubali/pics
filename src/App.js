import React, { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import Box from './components/Box'
import searchImages from './api'
import ImageList from './components/ImageList'

function App() {
  const [term, setTerm] = useState('term not yet defined')
  const [apiResponse, setapiResponse] = useState([])

  async function handleSubmit(searchedTerm) {
    const xyz  = await searchImages(searchedTerm)
    setapiResponse(xyz)
    setTerm(searchedTerm)
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList img={apiResponse} />
      <Box />
    </div>
  )
}

export default App
