import React from 'react'

export const PlaceGrid = ({place}) => {
  return (
    <>
        <img src={"https://backend.insjoaquimmir.cat/storage/" + place.file.filepath} alt={place.name} width="300"/>
    </>
  )
}
