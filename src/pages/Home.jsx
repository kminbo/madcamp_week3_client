import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import FallingLeaf from '../components/fallingLeaf';
import window_background2 from '../assets/images/window_background2.png';

function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/death');
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div
            className="w-full h-screen bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage:  `url(${window_background2})`,
            }}
        >
            <FallingLeaf />
        </div>
    );
}

export default Home;
