import React from 'react';
import { useLocation, useSearchParams } from 'wouter-preact';
import SideNavigation from '../../components/SideNavigation';
import { publicRoutes } from '../../utils/constants/routes';
import './style.scss';
import SystemsTechnologiesTabRender from './tabs/SystemsTechnologies/tabs';
import { AvailableSystemTechnologyTabs } from './tabs/SystemsTechnologies/tabs/tabs';

enum AvailableSearchParams {
    TAB = 'tab',
}

const LearnComputersPage: React.FC = () => {
    const [location, navigate] = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <div class={'learn-computers-page'}>
            <SideNavigation
                items={[
                    {
                        title: 'Home',
                        onClick: () => {
                            navigate(publicRoutes.home.path);
                        },
                    },
                    {
                        title: 'Learn',
                        onClick: () => {
                            navigate(publicRoutes.learn.path);
                        },
                    },
                    {
                        title: 'Systems Technologies',
                        children: [
                            {
                                title: 'Motherboard Introduction',
                                onClick: () => {
                                    setSearchParams((prev) => {
                                        const next = new URLSearchParams();
                                        next.set(
                                            AvailableSearchParams.TAB,
                                            AvailableSystemTechnologyTabs.MOTHERBOARD_INTRODUCTION,
                                        );
                                        return next;
                                    });
                                },
                            },
                        ],
                    },
                ]}
            />

            <main class={'lesson-content'}>
                <SystemsTechnologiesTabRender />
            </main>
        </div>
    );
};

export default LearnComputersPage;
