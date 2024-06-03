

import CounterDashboard from '@/pages/dashboard/counterchat'

export const metadata = {
    title: 'Counter Page',
    description: 'Un simple contador'
  };  

export default function CounterPage() {

  //Base de datos
  

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1>Producto en el carrito</h1>
        <CounterDashboard />
    </div>
  );
}