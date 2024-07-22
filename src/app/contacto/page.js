"use client";
import React, { useState } from 'react';

const Page = () => {
    // Estado para los campos del formulario
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        about: ''
    });

    // Manejador de cambios en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Manejador de envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario
        alert('Recibí tu mensaje, ¡gracias!');

        // Limpiar los campos del formulario después de enviar
        setFormData({
            name: '',
            lastname: '',
            email: '',
            about: ''
        });
    };

    return (
        <div>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-transparent">
                <div className="flex flex-col sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className='flex justify-center'>
                        <img
                            className="h-24 w-24 rounded-full"
                            src="https://res.cloudinary.com/da2aauwq2/image/upload/v1721517757/epic_body_12_bt4xa2.png"
                            alt="renzo fantuzzi"
                        />
                    </div>
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-red-50">
                        Envíame un mensaje
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
                        <div>
                            <div className="mt-2">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    placeholder='Nombre'
                                    value={formData.name}  // Controlado por estado
                                    onChange={handleChange}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="mt-2">
                                <input
                                    id="lastname"
                                    name="lastname"
                                    type="text"
                                    autoComplete="lastname"
                                    placeholder='Apellido'
                                    value={formData.lastname}  // Controlado por estado
                                    onChange={handleChange}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                placeholder='Correo Electrónico'
                                value={formData.email}  // Controlado por estado
                                onChange={handleChange}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>

                        <div className="col-span-full">
                            <div className="mt-2 mb-5">
                                <textarea
                                    id="about"
                                    name="about"
                                    placeholder="Déjame un mensaje"
                                    rows="3"
                                    value={formData.about}  // Controlado por estado
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                ></textarea>
                            </div>
                        </div>
                        
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-danger focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Page;





