import React from 'react';
import styles from './Introduction.module.scss';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import SocialMediaLink from '../SocialMediaLink/SocialMediaLink';

export default class Introduction extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    Bits and Pieces is a web comic that talks about tech, social issues, and whatever we're into
                    at the moment. Please consider supporting!
                </div>
                <div className={styles.iconContainer}>
                    <SocialMediaLink icon={faInstagram} followers={1392} url={"https://www.instagram.com/bnpcomics/"} />
                    <SocialMediaLink icon={faFacebook} followers={47} url={"https://www.facebook.com/bitsnpiecescomics"} />
                    <SocialMediaLink icon={faTwitter} followers={198} url={"https://twitter.com/bnpcomics"} />
                </div>
                <a rel="noreferrer" href='https://ko-fi.com/H2H644SS2' target='_blank'><img height='36' style={{border:0, height:36 }} src='https://cdn.ko-fi.com/cdn/kofi2.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
            </div>
        );
    }
}