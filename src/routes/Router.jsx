import { BrowserRouter as Router, Route, Routes, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import DeathScreen from '../pages/DeathScreen';
import App from '../App';
import JourneyStart from '../pages/JourneyStart';
import GratitudeRoom from '../features/rooms/GratitudeRoom';
import ReflectionRoom from '../features/rooms/ReflectionRoom';
import SelfRoom from '../features/rooms/SelfRoom';
import FriendRoom from '../features/rooms/FriendRoom';
import ParentsRoom from '../features/rooms/ParentsRoom';
import JourneyEnd from '../pages/JourneyEnd';
import Revival from '../pages/Revival';
import Teatime from '../pages/Teatime';
import Aristotle from '../pages/Aristotle';
import Schopenhauer from '../pages/Schopenhauer';
import Socrates from '../pages/Socrates';

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
            },
            {
                path: "self",
                element: <SelfRoom />,
            },
            {
                path: "friend",
                element: <FriendRoom />,
            }, 
            {
                path: "parents",
                element: <ParentsRoom />,
            },
            {
                path: "journey-end",
                element: <JourneyEnd />,
            },
            {
                path: "revival",
                element: <Revival />,
            },
            {
                path: "teatime",
                element: <Teatime />,
            },
            {
                path: "mentor/aristotle",
                element: <Aristotle />,
            }, 
            {
                path: "mentor/schopenhauer",
                element: <Schopenhauer />,
            },  
            {
                path: "mentor/socrates",
                element: <Socrates />,
            }
        ],
    },
]);

export default router;