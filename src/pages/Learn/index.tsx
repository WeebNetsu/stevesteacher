import React from 'react';
import Card from '../../components/Card';
import { publicRoutes } from '../../utils/constants/routes';
import './style.scss';

const LearnPage: React.FC = () => {
    return (
        <div className={'learn-page'}>
            <Card
                title="Computers"
                description="Learn the basics of computers and their hardware"
                url={publicRoutes.learnComputers.path}
            />
            <Card
                title="Personal Finances (coming soon)"
                description="Learn how to manage your personal finances."
                // url={publicRoutes.learnComputers.path}
            />
        </div>
    );
};

export default LearnPage;
