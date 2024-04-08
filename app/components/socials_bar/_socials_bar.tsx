"use client";

import {
	DiscordOutlined,
	MailOutlined,
	XOutlined,
	YoutubeFilled,
	YoutubeOutlined,
} from "@ant-design/icons";
import { Modal, Typography } from "antd";
import React, { useState } from "react";
import styles from "./_socials_bar.module.scss";

const SocialsBar: React.FC = () => {
	const [showConfirmEmail, setShowConfirmEmail] = useState(false);

	return (
		<div className={styles["socials-bar"]}>
			<a
				className={`${styles["social-icon"]} ${styles["youtube-icon"]}`}
				target="_blank"
				href="https://www.youtube.com/@stevesteacher"
			>
				<YoutubeOutlined />
			</a>

			<a
				className={`${styles["social-icon"]} ${styles["youtube-icon"]}`}
				target="_blank"
				href="https://www.youtube.com/@programmervibe"
			>
				<YoutubeFilled />
			</a>

			<a
				className={`${styles["social-icon"]} ${styles["twitter-icon"]}`}
				target="_blank"
				href="https://twitter.com/stevesteacherYT"
			>
				<XOutlined />
			</a>

			<a
				className={`${styles["social-icon"]} ${styles["discord-icon"]}`}
				target="_blank"
				href="https://discord.com/invite/NGtD9s6"
			>
				<DiscordOutlined />
			</a>

			<a
				className={`${styles["social-icon"]} ${styles["email-icon"]}`}
				onClick={() => {
					setShowConfirmEmail(true);
				}}
				href="#"
			>
				<MailOutlined />
			</a>

			<Modal
				open={showConfirmEmail}
				closable={false}
				onOk={() => {
					setShowConfirmEmail(false);
					// send email
				}}
				okText={"Cancel"}
				cancelText={
					<a
						className={`${styles["social-icon"]} ${styles["email-icon"]}`}
						onClick={() => {
							setShowConfirmEmail(true);
						}}
						href="mailto:stevesteacheryt@gmail.com"
					>
						Send Email
					</a>
				}
			>
				<Typography>
					Please do not send job offers, fake sponsorships or quick money scams
					to this email, they will automatically be filtered into spam. This
					email is for my supporters to contact me for coding help or
					discussions.
				</Typography>
			</Modal>
		</div>
	);
};

export default SocialsBar;
