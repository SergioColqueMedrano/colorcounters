'use client'
import { useState, useEffect } from 'react';

interface Contador {
  id: number;
  nombre: string;
  color: string;
  valor: number;
}

const CounterDashboard = () => {
  const [contadores, setContadores] = useState<Contador[]>([]);

  useEffect(() => {
    fetch('/api/contadores')
      .then(res => res.json())
      .then(data => setContadores(data));
  }, []);

  const agregarContador = async () => {
    const nombre = prompt('Ingrese el nombre del contador:');
    const color = prompt('Ingrese un color en formato HEX (por ejemplo, #ff0000):');
    if (nombre && color) {
      const response = await fetch('/api/contadores', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, color }),
      });
      const nuevoContador = await response.json();
      setContadores([...contadores, nuevoContador]);
    }
  };

  const actualizarContador = async (id: number, valor: number) => {
    await fetch(`/api/contadores?id=${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ valor }),
    });
    setContadores(contadores.map(contador => (contador.id === id ? { ...contador, valor } : contador)));
  };

  const eliminarContador = async (id: number) => {
    await fetch(`/api/contadores?id=${id}`, {
      method: 'DELETE',
    });
    setContadores(contadores.filter(contador => contador.id !== id));
  };

  return (
    <div>
      <button onClick={agregarContador}>Agregar Contador</button>
      <div>
        {contadores.map(contador => (
          <div key={contador.id} style={{ backgroundColor: contador.color }}>
            <button onClick={() => actualizarContador(contador.id, contador.valor - 1)}>-</button>
            <span>{contador.nombre}: {contador.valor}</span>
            <button onClick={() => actualizarContador(contador.id, contador.valor + 1)}>+</button>
            <button onClick={() => eliminarContador(contador.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CounterDashboard;
