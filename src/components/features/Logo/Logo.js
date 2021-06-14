import React from 'react';
import styles from './Logo.module.scss';
import { Link } from 'react-router-dom';

const Logo = () => {
	return (
		<Link className={styles.logo} to={`${process.env.PUBLIC_URL}/`}>
			ToDo-List
		</Link>
	);
};

export default Logo;
