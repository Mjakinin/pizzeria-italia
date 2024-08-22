import React from 'react';
import '../styles/Menu.css'; // Import der spezifischen CSS für die Menu-Komponente
import { motion } from 'framer-motion';

function Menu() {
    const salate = [
        { name: 'Kleiner gemischter Vorspeisensalat', description: 'Grüner Salat, Tomate, Gurke, Paprika, Möhre, Mais, Peperoni', price: '3,90€' },
        { name: 'Gemischter Salat mit Pizzabrot', description: 'Grüner Salat, Tomate, Gurke, Paprika, Möhre, Mais, Peperoni', price: '5,90€' },
        { name: 'Salat Caprese mit Pizzabrot', description: 'Tomaten, Mozzarella, Basilikum', price: '6,90€' },
        { name: 'Salat nach Art des Hauses mit Pizzabrot', description: 'Grüner Salat, Tomate, Gurke, Paprika, Möhre, Mais, Peperoni, gebratene Hühnerbrust', price: '6,90€' },
        { name: 'Salat mit Thunfisch mit Pizzabrot', description: 'Grüner Salat, Tomate, Gurke, Paprika, Möhre, Mais, Peperoni, Thunfisch', price: '6,90€' },
        { name: 'Salat Hawai mit Pizzabrot', description: 'Grüner Salat, Tomate, Gurke, Paprika, Möhre, Mais, Ananas, Vorderschinken', price: '6,90€' },
        { name: 'Wochensalat', description: 'Spezial laut Aushang mit Pizzabrot', price: '6,90€' }
    ];

    return (
        <div className='menu'>
            <div className='salate'>
                <div className='hero-banner'>
                    <h1 className='hero-title'>Unsere Salat-Spezialitäten</h1>
                </div>
                <div className='menu-section'>
                    {salate.map((salat, index) => (
                        <motion.div
                        key={index}
                        className='box'
                        initial={{ opacity: 0, translateY: 50 }}  // Nutzung von translateY statt y
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}  // Kürzere Dauer für bessere Performance
                        viewport={{ once: true }} // Animation nur einmal beim ersten Sichtbarwerden
                    >
                            <div className='background'></div>
                            <div className='details'>
                                <h3 className='name'>{salat.name}</h3>
                                <p className='description'>{salat.description}</p>
                                <p className='prices'>{salat.price}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Menu;
