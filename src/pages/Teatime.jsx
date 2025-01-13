import { useNavigate } from 'react-router-dom';

const Teatime = () => {
    const navigate = useNavigate();

    const handlePrevious = () => {
        navigate('/revival');
    };  

    const handleNext = () => {
        return;
    };

    return (
        <div>
            <h1>Teatime</h1>
        </div>
    );
};

export default Teatime;