import {
	DiscordOutlined,
	MailOutlined,
	XOutlined,
	YoutubeFilled,
	YoutubeOutlined,
} from "@ant-design/icons";
import React from "react";
import styles from "./_socials_bar.module.scss";

const SocialsBar: React.FC = () => {
	return (
		<div className={styles["socials-bar"]}>
			<span className={`${styles["social-icon"]} ${styles["youtube-icon"]}`}>
				<YoutubeOutlined />
			</span>

			<span className={`${styles["social-icon"]} ${styles["youtube-icon"]}`}>
				<YoutubeFilled />
			</span>

			<span className={`${styles["social-icon"]} ${styles["twitter-icon"]}`}>
				<XOutlined />
			</span>

			<span className={`${styles["social-icon"]} ${styles["discord-icon"]}`}>
				<DiscordOutlined />
			</span>

			<span className={`${styles["social-icon"]} ${styles["email-icon"]}`}>
				<MailOutlined />
			</span>
		</div>
	);
};

export default SocialsBar;
