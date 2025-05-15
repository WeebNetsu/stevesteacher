import React from 'react';
import HomePage from '../../pages/Home';
import MotherboardIntroductionsPage from '../../pages/Learn/Computers/SystemsTechnologies/MotherboardIntroduction';

interface RouteModel {
    [key: string]: {
        path: string;
        element: React.FunctionComponent<{}>;
    };
}

/**
 * User does not have to be logged in to view these routes
 */
export const publicRoutes: RouteModel = {
    home: {
        path: '/',
        element: HomePage,
    },
    learnComputersSystemsTechnologiesMotherboardIntroductions: {
        path: '/learn/computers/systems-technologies/motherboard-introductions',
        element: MotherboardIntroductionsPage,
    },
    // default: {
    //     path: '*',
    //     element: NotFoundPage,
    // },
};

/**
 * User has to be logged in to view these routes
 */
export const protectedRoutes: RouteModel = {};
