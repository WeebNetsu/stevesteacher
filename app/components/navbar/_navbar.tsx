import Link from "next/link";
import React from "react";
import styles from "./_navbar.module.scss";

const Navbar: React.FC = () => {
	return (
		<nav className={styles.navbar}>
			<ul>
				<li className={styles["nav-item"]}>
					<Link href={"/support"}>Support</Link>
				</li>
				{/* <li className={styles.navItem}>
					<Link href={"/follow-me"}>Follow Me</Link>
				</li> */}
			</ul>
		</nav>
	);
};

export default Navbar;
