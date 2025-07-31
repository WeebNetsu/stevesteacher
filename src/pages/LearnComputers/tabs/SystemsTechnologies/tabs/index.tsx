import React from 'react';
import { useSearchParams } from 'wouter-preact';
import MotherboardIntroductionsPage from './MotherboardIntroduction';
import { AvailableSystemTechnologyTabs } from './tabs';

enum AvailableSearchParams {
    TAB = 'tab',
}

const SystemsTechnologiesTabRender: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const tab = searchParams.get(AvailableSearchParams.TAB);

    return (
        <div>
            {tab === AvailableSystemTechnologyTabs.MOTHERBOARD_INTRODUCTION ? (
                <MotherboardIntroductionsPage />
            ) : (
                <p>Select a lesson!</p>
            )}
        </div>
    );
};

export default SystemsTechnologiesTabRender;
