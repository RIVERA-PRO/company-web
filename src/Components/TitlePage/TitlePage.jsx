import React from 'react';
import { Link as Anchor } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './TitlePage.css';

export default function TitlePage({ firstLinkText, secondLinkText, tercerLinkText }) {
    return (
        <div className='TitlePage'>
            <div className='deFlexTile'>
                <Anchor to={`/`}>
                    <FontAwesomeIcon icon={faHome} /> {firstLinkText}
                </Anchor>
                <Anchor to={`/${secondLinkText}`}>
                    <FontAwesomeIcon icon={faAngleRight} /> {secondLinkText}
                </Anchor>
            </div>
            {tercerLinkText && (
                <p><FontAwesomeIcon icon={faAngleRight} /> {tercerLinkText}</p>
            )}
        </div>
    );
}
