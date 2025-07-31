import React from 'react';
import HomePage from '../../pages/Home';
import LearnPage from '../../pages/Learn';
import LearnComputersPage from '../../pages/LearnComputers';

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
    learnComputers: {
        path: '/learn/computers',
        element: LearnComputersPage,
    },
    learn: {
        path: '/learn',
        element: LearnPage,
    },
    // learnComputersSystemsTechnologiesMotherboardIntroductions: {
    //     path: '/learn/computers/systems-technologies/motherboard-introductions',
    //     element: MotherboardIntroductionsPage,
    // },
    // default: {
    //     path: '*',
    //     element: NotFoundPage,
    // },
};

/**
 * User has to be logged in to view these routes
 */
export const protectedRoutes: RouteModel = {};
