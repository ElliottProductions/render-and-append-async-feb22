import React from 'react';

export default function Shipitem(props) {
  return (
    <div className="cryptid-card" style={{ backgroundColor: 'green' }}>
       
      <p>Weighs: {props.ship.weighs} tons.</p>
      <p>Known as the {props.ship.name}.</p>
      <p>Powered by: {props.ship.powered}</p>
      <p>Range: {props.ship.range} light-years.</p>

    </div>
  );
}
