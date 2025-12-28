import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>(() => {
        const hash = window.location.hash.replace('#/', '');
        if (['home', 'about', 'services', 'contact'].includes(hash)) {
            return hash as Page;
        }
        return 'home';
    });

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#/', '');
            if (['home', 'about', 'services', 'contact'].includes(hash)) {
                setCurrentPage(hash as Page);
            } else {
                 setCurrentPage('home');
            }
        };

        window.addEventListener('hashchange', handleHashChange);
        // Set initial page based on hash
        handleHashChange();

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    const navigateTo = (page: Page) => {
        window.location.hash = `/${page}`;
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage navigateTo={navigateTo} />;
            case 'about':
                return <AboutPage />;
            case 'services':
                return <ServicesPage navigateTo={navigateTo} />;
            case 'contact':
                return <ContactPage />;
            default:
                return <HomePage navigateTo={navigateTo}/>;
        }
    };

    return (
        <div className="flex flex-col min-h-screen font-sans">
            <Header currentPage={currentPage} navigateTo={navigateTo} />
            <main className="flex-grow">
                {renderPage()}
            </main>
            <Footer navigateTo={navigateTo} currentPage={currentPage} />
        </div>
    );
};

export default App;