import React from 'react';
import { useParams } from 'react-router-dom';

export default function PlaceEdit(){
    const { id } = useParams();

  return (
    <div>PlaceEdit {id}</div>
    
  )
}