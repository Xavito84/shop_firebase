import React, { useContext, useState } from 'react';
import { CardContext } from '../context/CardContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

export const CheckOut = () => {
    const [pedidoId, setPedidoId] = useState("");
    const { carrito, precioTotal, vaciarCarrito } = useContext(CardContext);
    const { register, handleSubmit, reset } = useForm();

    const comprar = async (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        };

        try {
            const pedidosRef = collection(db, "pedidos");
            const docRef = await addDoc(pedidosRef, pedido);
            setPedidoId(docRef.id);
            vaciarCarrito(); // Vaciar el carrito después de que la compra se complete con éxito
            reset(); // Resetear el formulario
        } catch (error) {
            console.error("Error al crear el pedido: ", error);
        }
    };

    if (pedidoId) {
        return (
            <div className="container">
                <h1 className="main-title">Muchas gracias por su compra</h1>
                <h3 className='h3-pedido'>Tu número de pedido es: {pedidoId}</h3>
            </div>
        );
    }

    return (
        <div className="container">
            <h1 className="main-title">Finalizar compra</h1>
            <form className="formulario" onSubmit={handleSubmit(comprar)}>
                <input type="text" placeholder="Introduce tu nombre" {...register("nombre", { required: true })} />
                <input type="email" placeholder="Introduce tu e-mail" {...register("email", { required: true })} />
                <input type="phone" placeholder="Introduce tu teléfono" {...register("telefono", { required: true })} />
                <button type="submit" className="enviar">Enviar</button>
            </form>
        </div>
    );
};
