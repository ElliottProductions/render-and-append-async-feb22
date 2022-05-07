import React from 'react';
import './App.css';


export default function Cryptiditem({ props }) {
  return (
    <div className="cryptid-card">
      <p>Name: {props.name}</p>
      <img className="image" src={props.image}/>
      <p>AKA: {props.aka.map((name => <p key={name}>{name}</p>))}</p>
      <p>Habitat: {props.range}</p>
      <p>Type: {props.type}</p>
      <p>Phenomenon: {props.phenom}</p>
    </div>
  );
}
