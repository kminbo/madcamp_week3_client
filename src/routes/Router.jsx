import { BrowserRouter as Router, Route, Routes, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import DeathScreen from '../pages/DeathScreen';
import App from '../App';

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
                path: "/death",
                element: <DeathScreen />,
            },
        ],
    },
]);

export default router;