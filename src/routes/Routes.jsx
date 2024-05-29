import { Routes as ReactRoutes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import App from '../pages/App';
import BrainerOnBaseGame from '../components/game/BrainerOnBaseGame';
import BrainerOnBaseShop from '../components/shop/BrainerOnBaseShop';


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