import { Routes as ReactRoutes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import App from '../pages/App';


const Routes = () => {
    return (
        <ReactRoutes >
            <Route path="/home" element={<Home />} />
            <Route
                exact path={'/'}
                element={<App/>}
            />
        </ReactRoutes>
    )
};

export default Routes;