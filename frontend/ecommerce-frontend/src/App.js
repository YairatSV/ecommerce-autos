import React from 'react';
import NavBar from './Navbar'; // Asegúrate de importar el componente de navegación
import CarList from './CarList'; // Asegúrate de que CarList esté correctamente importado
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const App = () => {
    return (
        <div>
            <NavBar />
            <h1>Bienvenido a AutoPlus</h1>
            <p>Crea una cuenta o inicia sesión para tener el control de tu compra, venta o financiamiento.</p>
            <CarList /> {/* Componente para mostrar la lista de autos */}
        </div>
    );
};

export default App;

