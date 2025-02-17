import React from 'react'

import useGenres from '../hooks/useGenres'

const GenreList = () => {
const {genres, error, isLoading} = useGenres();

  return (
    <div>GenreList</div>
  )
}

export default GenreList