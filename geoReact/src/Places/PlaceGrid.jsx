import React from 'react'

export const PlaceGrid = ({place}) => {
  return (
    <div className="placegrid">
      <div className="nomplace">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ratione corrupti molestiae architecto cupiditate fuga. Eligendi, ipsa vel! Quia facere voluptatem, labore commodi eveniet iusto tempora illum accusamus doloremque. Soluta.
      </div>
      <div className="placeimg">
          <img src={"https://backend.insjoaquimmir.cat/storage/" + place.file.filepath} alt={place.name}/>

      </div>
      <div className='infoplace'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos enim, repellendus tempore maiores officia voluptatibus sed ab eum illo esse commodi placeat a! Unde consequuntur autem vitae at neque assumenda?</div>
    </div>
    
  )
}
