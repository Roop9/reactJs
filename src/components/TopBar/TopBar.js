import React from 'react';
import './TopBar.css';

// HeroIcons
import { EnvelopeIcon , PhoneIcon , MapIcon , GlobeAltIcon } from '@heroicons/react/24/outline'

function TopBar() {
    return (
        
        <div className="topbar">
            <div className="profile__image">
                <img className="profile__img" src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png" />
            </div>
            <div className="profile__heading">
                <h2 className="profile__header">Roopchange</h2>
                <hr className="profile__intersection" />
                <h2 className="profile__header">Lead Architect - Digital Solutions</h2>
            </div>
            <div className="profile__details">
                <div className="profile__section">
                    <EnvelopeIcon />
                    <h4>test@gmail.com</h4>
                </div>
                <div className="profile__section">
                    <PhoneIcon />
                    <h4>+91 987654321</h4>
                </div>
                <div className="profile__section">
                    <MapIcon />
                    <h4>#123, Random Street Address</h4>
                </div>
                <div className="profile__section">
                    <GlobeAltIcon />
                    <h4>www.test.com</h4>
                </div>
            </div>
        </div>
    )
}

export default TopBar
