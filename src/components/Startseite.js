import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/Startseite.css';

function Home() {
    const baseUrl = `${process.env.PUBLIC_URL}/Bilder/`;

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://static.elfsight.com/platform/platform.js";
        script.setAttribute('data-use-service-core', 'true');
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="home">
            <motion.div
                className="hero-home"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <img src={`${baseUrl}background/pizzen.jpg`} alt="Pizzeria Hero Banner" />
                <div className="hero-text-home">
                    <h1>Willkommen in unserer Pizzeria!</h1>
                    <p>Genießen Sie italienische Köstlichkeiten in einer gemütlichen Atmosphäre.</p>
                </div>
            </motion.div>

            <motion.div
                className="section about-us"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <div className="text-section">
                    <h2>Über Uns</h2>
                    <p>Unsere Pizzeria liegt im Herzen von Naumburg und bietet Ihnen authentische italienische Küche in einem freundlichen und entspannten Ambiente. Besuchen Sie uns und lassen Sie sich von unserem hervorragenden Service und dem Geschmack Italiens begeistern.</p>
                </div>
                <div className="image-section">
                    <img src={`${baseUrl}background/pizzeria.png`} alt="Über uns" />
                </div>
            </motion.div>

            <motion.div
                className="section contact"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <div className="image-section">
                    <img src={`${baseUrl}background/indoor.png`} alt="Kontakt" />
                </div>
                <div className="text-section">
                    <h2>Kontakt</h2>
                    <p><strong>Adresse:</strong> Salzstraße 32, 06618 Naumburg</p>
                    <p><strong>Tel:</strong> 03445 2616677</p>
                    <p><strong>Öffnungszeiten:</strong> 11:30Uhr - 14:30Uhr und 17:00Uhr - 21:30Uhr</p>
                    <p><strong>Montag:</strong> Ruhetag</p>
                    <p><strong>Anfahrtspauschale je Lieferung:</strong> 1,00€ Naumburg und 2,00€ Umgebung</p>
                </div>
            </motion.div>

            <motion.div
                className="elfsight-app-436332db-b884-4b3d-9acf-0e4afba1d4e0"
                data-elfsight-app-lazy
                style={{ width: '100%', height: 'auto' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            />

            <motion.div
                className="elfsight-app-6c2e592c-cb9a-4cd9-84b7-5079384b76b2"
                data-elfsight-app-lazy
                style={{ width: '100%', height: 'auto' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            />

        </div>
    );
}

export default Home;
