import { Routes as ReactRoutes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import App from '../pages/App';
import BrainerOnBaseShop from '../components/shop/BrainerOnBaseShop';
import BrainerOnBaseMain from '../components/game/BrainerOnBaseMain';


const Routes = () => {
    return (
        <ReactRoutes >
            <Route path="/home" element={<Home />} />
            <Route
                exact path={'/game'}
                element={<BrainerOnBaseMain/>}
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