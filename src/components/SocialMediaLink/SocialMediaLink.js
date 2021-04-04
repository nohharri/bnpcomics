import React from 'react';
import styles from './SocialMediaLink.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class SocialMediaLink extends React.Component {

    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }

    componentDidMount() {
        this.startTimer();
    }

    startTimer() {
        const { counter } = this.state;
        const { followers } = this.props;

        setTimeout(() => {
            if (counter < followers) {
                this.setState({ counter: counter + 1 });
                this.startTimer();
            }
        }, 1);
        
    }

    render() {
        const { counter } = this.state;
        const { icon, url } = this.props;
        return (
            <div className={styles.container}>
                <a href={url}>
                    <FontAwesomeIcon className={styles.icon} icon={icon} />
                    <div className={styles.text}>{counter}</div>
                </a>
            </div>
        )
    }
}