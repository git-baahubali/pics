import axios from 'axios'

const url = 'https://api.unsplash.com/search/photos'

const searchImages = async (term) => {
  const response = await axios.get(url, {
    headers: {
      Authorization: 'Client-ID 1PY6CLwOO89a8V7a5KTrm00mWBizciza4BIsECR_LXU',
    },
    params: {
      query: term,
    },
  })

  return response.data.results
}

export default searchImages
