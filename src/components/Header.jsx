"use client";
import React from "react";
import styles from "./header.module.css";
import icon1 from "../assets/icon.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import { Link } from "react-router";

const Header = () => {
	return (
		<header className={styles.headerWrapper}>
			<nav className={styles.navigation}>
				<Link to='/'>
					<img
						src='https://cdn.builder.io/api/v1/image/assets/TEMP/bb2bbd45c45a2d74835354277fd5b4f1319d202a'
						alt='Silent Bridge Logo'
						className={styles.logo}
					/>
				</Link>

				<div className={styles.menuItems}>
					<Link to='/translate'>
						<span className={styles.menuItem}>
							<img src={icon1} alt='' className={styles.icon} />
							<span className={styles.menuText}>Translate</span>
						</span>
					</Link>
					<Link to='/learn'>
						<span className={styles.menuItem}>
							<img src={icon2} alt='' className={styles.icon} />
							<span className={styles.menuText}>Learn</span>
						</span>
					</Link>
					<span className={styles.menuItem}>
						<img src={icon3} alt='' className={styles.icon} />
						<span className={styles.menuText}>Profile</span>
					</span>
				</div>
			</nav>
		</header>
	);
};

export default Header;
