import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './Header';
import Startseite from './Startseite';
import Pizzen from './Pizzen';
import Nudelgerichte from './Nudelgerichte';
import Salate from './Salate';
import Getränke from './Getränke';
import Footer from './Footer';
import '../styles/App.css'; // Import der globalen CSS-Stile

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <Startseite />
            </motion.div>
          }
        />
        <Route
          path="/Pizzen"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <Pizzen />
            </motion.div>
          }
        />
        <Route
          path="/Nudelgerichte"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <Nudelgerichte />
            </motion.div>
          }
        />
        <Route
          path="/Salate"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <Salate />
            </motion.div>
          }
        />
        <Route
          path="/Getränke"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <Getränke />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div className="App">
          <Header />
          <main>
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </ScrollToTop>
    </Router>
  );
}

function ScrollToTop({ children }) {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return children;
}

export default App;
