import React from 'react';
import Utensilitem from './Utensilitem';

export default function UtensilsList({ utensils }) {
  return (
    <div className="cryptid-list">
      {utensils.map((utensil) => <Utensilitem key={Math.floor(Math.random() * 10000)} utensil={utensil} />)}
    </div>
  );
}
