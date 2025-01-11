import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/death');
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div>
            <h1>Home</h1>
        </div>
    );
}

export default Home;
