import styles from "./page.module.scss";

export default function Home() {
	return (
		<main className={styles.main}>
			<div>
				<h1>Steve&apos;s teacher</h1>
				<p>
					<a target="_blank" href="https://www.youtube.com/@stevesteacher">
						Learn To Code
					</a>
				</p>
			</div>

			<p>
				Psst! Website is still in development, come back later for some cool
				stuff!
			</p>
		</main>
	);
}
