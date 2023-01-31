import React from 'react';
import { useParams } from 'react-router-dom';

export default function Place(){
    const { id } = useParams();

  return (
    <div>Place {id}</div>
  )
}