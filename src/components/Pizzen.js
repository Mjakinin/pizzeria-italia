import React from 'react';
import '../styles/Menu.css'; // Import der spezifischen CSS für die Menu-Komponente
import { motion } from 'framer-motion';

function Menu() {
    const pizzas = [
        { name: '01 Margherita', description: 'Tomatensoße, Mozzarella, Basilikum', prices: 'klein 4,70€ | groß 5,70€' },
        { name: '02 Marinara', description: 'Tomatensoße, Knoblauch, Sardellen, Oregano', prices: 'klein 4,70€ | groß 5,70€' },
        { name: '03 Prosciutto', description: 'Tomatensoße, Mozzarella, Vorderschinken', prices: 'klein 5,50€ | groß 6,50€' },
        { name: '04 Prosciutto e Funghi', description: 'Tomatensoße, Mozzarella, Vorderschinken, Champignons', prices: 'klein 6,20€ | groß 7,20€' },
        { name: '05 4Stagioni', description: 'Tomatensoße, Mozzarella, Vorderschinken, Champignons, Salami, Artischocken', prices: 'klein 7,60€ | groß 8,60€' },
        { name: '06 Salame', description: 'Tomatensoße, Mozzarella, Salami', prices: 'klein 5,50€ | groß 6,50€' },
        { name: '07 Diavolo', description: 'Tomatensoße, Mozzarella, scharfe Salami', prices: 'klein 5,90€ | groß 6,90€' },
        { name: '08 Tonno e Cipolla', description: 'Tomatensoße, Mozzarella, Thunfisch, Zwiebeln', prices: 'klein 6,20€ | groß 7,20€' },
        { name: '09 Frutti di Mare', description: 'Tomatensoße, Mozzarella, Meeresfrüchte, Knoblauch', prices: 'klein 8,50€ | groß 9,50€' },
        { name: '10 Napoli', description: 'Tomatensoße, Mozzarella, Oliven, Sardellen, Kapern', prices: 'klein 6,70€ | groß 7,70€' },
        { name: '11 4 Formaggi', description: 'Tomatensoße, Mozzarella, 4 verschiedene Käsesorten', prices: 'klein 7,50€ | groß 8,50€' },
        { name: '12 Vegetariana', description: 'Tomatensoße, Mozzarella, Champignons, Artischocken, Paprika, Spinat', prices: 'klein 7,50€ | groß 8,50€' },
        { name: '13 Calzone (gefaltet)', description: 'Tomatensoße, Mozzarella, Vorderschinken, Champignons', prices: 'groß 9,00€' },
        { name: '14 Spinaci', description: 'Tomatensoße, Mozzarella, Spinat, Knoblauch', prices: 'klein 6,20€ | groß 7,20€' },
        { name: '15 Italia', description: 'Tomatensoße, Mozzarella, Parmaschinken, Rucola, Kirschtomaten, Parmesan fein gehobelt', prices: 'klein 8,90€ | groß 9,90€' },
        { name: '16 Hawai', description: 'Tomatensoße, Mozzarella, Vorderschinken, Ananas', prices: 'klein 6,00€ | groß 7,00€' },
        { name: '17 Funghi', description: 'Tomatensoße, Mozzarella, Champignons', prices: 'klein 5,50€ | groß 6,50€' },
        { name: '18 Wochenpizza', description: 'Spezial laut Aushang', prices: 'groß 8,50€' },
        { name: '19 Kinderpizza', description: 'Überraschung nur für Kinder', prices: 'groß 4,90€' },
    ];

    return (
        <div className='menu'>
            <div className='pizza'>
                <div className='hero-banner'>
                    <h1 className='hero-title'>Unsere Pizza-Spezialitäten</h1>
                </div>
                <div className='menu-section'>
                    {pizzas.map((pizza, index) => (
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
                                <h3 className='name'>{pizza.name}</h3>
                                <p className='description'>{pizza.description}</p>
                                <p className='prices'>{pizza.prices}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Menu;