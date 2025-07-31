import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from './components/Footer';
import NotFound from './pages/_404';
import './style.scss';

import { render } from 'preact';
import React from 'react';
import { Route, Switch } from 'wouter-preact';
import { publicRoutes } from './utils/constants/routes';

const App: React.FC = () => {
    return (
        <div>
            <Switch>
                {Object.values(publicRoutes).map((route) => (
                    <Route path={route.path} component={route.element} />
                ))}
                <Route path={'*'} component={NotFound} />
            </Switch>

            <Footer />
        </div>
    );
};

export default App;

if (typeof window !== 'undefined') {
    render(<App />, document.getElementById('app'));
}
