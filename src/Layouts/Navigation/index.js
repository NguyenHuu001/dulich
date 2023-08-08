import React, { useState, useEffect } from 'react';
import eventBus from '../EventsLayout';
import './Navigation.scss';
import { CloseOutlined } from '@ant-design/icons';
function Navigation() {
    const [isDisplayed, setIsDisplayed] = useState(false);
    useEffect(() => {
        eventBus.on('showSecondComponent', (isVisible) => {
            setIsDisplayed(isVisible);
        });

        return () => {
            eventBus.off('showSecondComponent');
        };
    }, []);
    const handleClose = () => {
        setIsDisplayed(false);
    };
    return (
        <div className="navi" style={{ display: isDisplayed ? 'block' : 'none' }}>
            <div className="navigation">
                <CloseOutlined className="close" onClick={handleClose} />
                <div className="content_nav">
                    <h2>Home</h2>
                    <h2>About</h2>
                    <h2>Tours</h2>
                </div>
            </div>
        </div>
    );
}

export default Navigation;
