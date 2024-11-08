import React, { useState, useEffect } from 'react';

function CarList() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('/api/cars')
      .then(res => res.json())
      .then(data => setCars(data));
  }, []);

  return (
    <div>
      <h2>Lista de Autos</h2>
      <ul>
        {cars.map(car => (
          <li key={car._id}>
            {car.make} - {car.model} ({car.year}) - ${car.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarList;
