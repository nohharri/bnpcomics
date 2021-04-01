import React from 'react';
import logo from '../../static/logo.jpg';
import styles from './Header.module.scss';

export default class Header extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <h1><img alt="logo" className={styles.logo} src={logo} />bits and pieces</h1>
            </div>
        )
    }
}
