import React from 'react';
import Cryptiditem from './Cryptiditem';


export default function CryptidsList({ cryptids }) {
  return (
    <div className="cryptid-list">
      {cryptids.map((cryptid) => <Cryptiditem key={Math.floor(Math.random() * 10000)} props={cryptid} />)}
    </div>
  );
}
