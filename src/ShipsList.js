import React from 'react';
import Shipitem from './Shipitem';

export default function ShipsList({ ships }) {
  return (
    <div className="cryptid-list">
      {ships.map((ship) => <Shipitem key={Math.floor(Math.random() * 10000)} ship={ship} />)}
    </div>
  );
}
