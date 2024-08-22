import React from 'react';
import '../styles/Menu.css'; // Import der spezifischen CSS für die Menu-Komponente
import { motion } from 'framer-motion';

function Menu() {
    const getränke = [
        { name: 'Gaensefurther Classic', description: 'Flasche 0,5l', price: '2,00€' },
        { name: 'Gaensefurther Classic', description: 'Flasche 1,0l', price: '3,00€' },
        { name: 'Gaensefurther Naturelle', description: 'Flasche 0,5l', price: '2,00€' },
        { name: 'Gaensefurther Naturelle', description: 'Flasche 1,0l', price: '3,00€' },
        { name: 'Coca Cola', description: 'Flasche 0,5l', price: '2,50€' },
        { name: 'Mezzo Mix', description: 'Flasche 0,5l', price: '2,50€' },
        { name: 'Fanta – Orange', description: 'Flasche 0,5l', price: '2,50€' },
        { name: 'Sprite', description: 'Flasche 0,5l', price: '2,50€' },
        { name: 'Lift Apfelschorle', description: 'Flasche 0,5l', price: '2,50€' },
        { name: 'Ginger Ale', description: 'Flasche 0,21l', price: '2,00€' },
        { name: 'Tonic Water', description: 'Flasche 0,21l', price: '2,00€' },
        { name: 'Bitter Lemon', description: 'Flasche 0,21l', price: '2,00€' },
        { name: 'Freiberger alkoholfrei', description: 'Flasche 0,5l', price: '2,80€' },
        { name: 'Köstritzer Schwarzbier', description: 'Flasche 0,5l', price: '2,80€' },
        { name: 'Köstritzer Radler', description: 'Flasche 0,5l', price: '2,80€' },
        { name: 'Hefeweizen Schöfferhofer', description: 'hell Flasche 0,5l', price: '2,80€' },
        { name: 'Prosecco', description: 'Flasche', price: '12,00€' },
        { name: 'Rotwein/Weißwein', description: 'auf Nachfrage', price: 'Preis auf Nachfrage' }
    ];

    return (
        <div className='menu'>
            <div className='getränke'>
                <div className='hero-banner'>
                    <h1 className='hero-title'>Unsere Getränke</h1>
                </div>
                <div className='menu-section'>
                    {getränke.map((getränk, index) => (
                        <motion.div
                            key={index}
                            className='box'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            viewport={{ once: true }} // Animation nur einmal beim ersten Sichtbarwerden
                        >
                            <div className='background'></div>
                            <div className='details'>
                                <h3 className='name'>{getränk.name}</h3>
                                <p className='description'>{getränk.description}</p>
                                <p className='prices'>{getränk.price}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}


export default Menu;
