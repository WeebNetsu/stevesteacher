import React from "react";
import "./style.scss";

const Footer: React.FC = () => {
	return (
		<footer>
			<div class="socials-bar">
				<a
					class="social-icon youtube-icon"
					target="_blank"
					href="https://www.youtube.com/@stevesteacher"
				>
					<i class="bi bi-youtube"></i>
				</a>

				<a
					class="social-icon youtube-icon"
					target="_blank"
					href="https://www.youtube.com/@programmervibe"
				>
					<i class="bi bi-youtube"></i>
				</a>

				<a
					class="social-icon twitter-icon"
					target="_blank"
					href="https://twitter.com/stevesteacherYT"
				>
					<i class="bi bi-twitter-x"></i>
				</a>

				<a
					class="social-icon discord-icon"
					target="_blank"
					href="https://discord.com/invite/NGtD9s6"
				>
					<i class="bi bi-discord"></i>
				</a>

				<a
					class="social-icon github-icon"
					target="_blank"
					href="https://github.com/WeebNetsu"
				>
					<i class="bi bi-github"></i>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
