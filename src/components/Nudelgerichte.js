import React from 'react';
import '../styles/Menu.css'; // Import der spezifischen CSS für die Menu-Komponente
import { motion } from 'framer-motion';

function Menu() {
    const pastas = [
        { name: 'Nudeln mit Tomatensoße', description: 'Tomatensoße nach Art des Hauses', price: '5,90€' },
        { name: 'Nudeln Bolognese', description: 'Traditionelle italienische Hackfleischsoße', price: '5,90€' },
        { name: 'Nudeln Carbonara', description: 'Bauchspeck, Eigelb und Sahne', price: '6,90€' },
        { name: 'Wochennudelgericht', description: 'Spezial laut Aushang', price: 'Preis laut Aushang' }
    ];

    return (
        <div className='menu'>
            <div className='pasta'>
                <div className='hero-banner'>
                    <h1 className='hero-title'>Unsere Pasta-Spezialitäten</h1>
                </div>
                <div className='menu-section'>
                    {pastas.map((pasta, index) => (
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
                                <h3 className='name'>{pasta.name}</h3>
                                <p className='description'>{pasta.description}</p>
                                <p className='prices'>{pasta.price}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Menu;
