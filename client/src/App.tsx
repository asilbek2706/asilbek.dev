import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Layout from './components/Layout/Layout';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import QuestionsPage from "./pages/Contact/QuestionsPage";
import ScrollToTop from "./components/Shared/Utils/ScrollToTop.tsx";
import { AnimationProvider } from './context/AnimationContext';

function App() {
    const location = useLocation();
    const [pageKey, setPageKey] = useState(0);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.4,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            wheelMultiplier: 1.1,
            touchMultiplier: 2,
            infinite: false,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    useEffect(() => {
        setPageKey(prev => prev + 1);
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <AnimationProvider key={pageKey}>
            <Layout>
                <ScrollToTop />
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/contact/questions" element={<QuestionsPage />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </Layout>
        </AnimationProvider>
    );
}

export default App;