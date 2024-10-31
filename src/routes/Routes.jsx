import { Routes as ReactRoutes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import App from '../pages/App';
import BrainerOnBaseShop from '../components/shop/BrainerOnBaseShop';
import BrainerOnBaseGame from '../components/game/BrainerOnBaseGame';


const Routes = () => {
    return (
        <ReactRoutes >
            <Route path="/home" element={<Home />} />
            <Route
                exact path={'/game'}
                element={<BrainerOnBaseGame/>}
            />
            <Route
                exact path={'/shop'}
                element={<BrainerOnBaseShop/>}
            />
            <Route
                exact path={'/'}
                element={<App/>}
            />
        </ReactRoutes>
    )
};

export default Routes;