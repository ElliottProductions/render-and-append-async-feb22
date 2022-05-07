import React from 'react';

export default function Utensilitem(props) {
  return (
    <div className="cryptid-card" style={{ backgroundColor: 'orange' }}>
      <h4>{props.utensil.name}</h4>
      <p>Popular Variations: {props.utensil.variations.map((name => <p key={name}>{name}</p>))}</p>
      <p>Distance from Earth: {props.utensil.Distance} million miles</p>
      <p>Is it a Spork: Is {props.utensil.is_spork ? false : 'Not'}</p>
      <p>Is it Sharp:{props.utensil.is_sharp ? true : 'Is '} Not</p>
    </div>
  );
}
