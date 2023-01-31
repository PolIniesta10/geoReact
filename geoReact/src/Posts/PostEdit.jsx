import React from 'react';
import { useParams } from 'react-router-dom';

export default function PostEdit(){
    const { id } = useParams();

  return (
    <div>PostEdit {id}</div>
  )
}