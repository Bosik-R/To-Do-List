import React from 'react';
import styles from './MainLayout.module.scss';
import Logo from '../features/Logo/Logo';

const MainLayout = ({ children }) => {
	//const response = fetch();

	return (
		<div className={styles.container}>
			<Logo />
			{children}
		</div>
	);
};

export default MainLayout;
