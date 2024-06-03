
import { CartCounter } from "@/app/shopping-cart";
import { title } from "process";
import { useState } from "react";
import ChatGPTHome from '../../../pages/abmcontadores';
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
      <CartCounter value={20} />
        <CounterDashboard />
        <h1>Productos en el carrito</h1>
    </div>
  );
}