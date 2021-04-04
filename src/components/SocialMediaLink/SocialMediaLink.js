import React from 'react';
import styles from './SocialMediaLink.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class SocialMediaLink extends React.Component {
    render() {
        const { icon, followers, url } = this.props;
        return (
            <div className={styles.container}>
                <a href={url}>
                    <FontAwesomeIcon className={styles.icon} icon={icon} />
                    <div className={styles.text}>{followers}</div>
                </a>
            </div>
        )
    }
}