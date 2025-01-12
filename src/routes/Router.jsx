import { BrowserRouter as Router, Route, Routes, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import DeathScreen from '../pages/DeathScreen';
import App from '../App';
import JourneyStart from '../pages/JourneyStart';
import GratitudeRoom from '../features/rooms/GratitudeRoom';
import ReflectionRoom from '../features/rooms/ReflectionRoom';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "death",
                element: <DeathScreen />,
            },
            {
                path: "journey-start",
                element: <JourneyStart />,
            },
            {
                path: "gratitude",
                element: <GratitudeRoom />,
            },
            {
                path: "reflection",
                element: <ReflectionRoom />,
            }
        ],
    },
]);

export default router;