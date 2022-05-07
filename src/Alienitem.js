import React from 'react';

export default function Alienitem(props) {
  return (
    <div className="cryptid-card">
      <p>Species: {props.alien.Species}</p>
      <p>Known Specimens: {props.alien.Secret_Identities.map((name => <p key={name}>{name}</p>))}</p>
      <p>Distance from Earth: {props.alien.Distance} million miles</p>
      <p>Eyes: {props.alien.Eyes}</p>
      <p>Carbon based: {props.alien.is_Carbon_based ? true : 'Yes'}</p>
    </div>
  );
}
