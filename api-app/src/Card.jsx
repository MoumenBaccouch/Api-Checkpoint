import React from 'react';

const Card = ({ el }) => {
  return (
    <div className="card">
      <h1 className="name">{el.name}</h1>
      <p className="email">{el.email}</p>
      <p className="phone">{el.phone}</p>
    </div>
  );
};

export default Card;
