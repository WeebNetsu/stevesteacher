import { LocationProvider, Route, Router, hydrate, prerender as ssr } from 'preact-iso';

import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from './components/Footer';
import NotFound from './pages/_404';
import './style.scss';

import React from 'react';
import { publicRoutes } from './utils/constants/routes';

const App: React.FC = () => {
    return (
        <LocationProvider>
            {/* <Header /> */}

            <main>
                <Router>
                    {Object.values(publicRoutes).map((route) => (
                        <Route path={route.path} component={route.element} />
                    ))}
                    <Route default component={NotFound} />
                </Router>
            </main>

            <Footer />
        </LocationProvider>
    );
};

export default App;

if (typeof window !== 'undefined') {
    hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
    return await ssr(<App {...data} />);
}
