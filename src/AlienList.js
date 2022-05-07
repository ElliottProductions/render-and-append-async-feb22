import React from 'react';
import Alienitem from './Alienitem';

export default function AlienList({ aliens }) {
  return (
    <div className="cryptid-list">
      {aliens.map((alien) => <Alienitem key={Math.floor(Math.random() * 10000)} alien={alien} />)}
      {console.log(aliens)}
    </div>
  );
}
