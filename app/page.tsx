import Image from "next/image";
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

			<div className={styles["image-container"]}>
				<a
					href="https://youtube.com/playlist?list=PLYBJzqz8zpWaiGbFcSdlh08zlpe8Tl_Gh&si=cb8WlQayDPHOkuFm"
					target="_blank"
					className="image-link"
				>
					<Image
						style={{ borderRadius: "5px" }}
						src="/nim.jpg"
						sizes="(min-width: 768px) 80px, 60px"
						fill
						alt="Nim Programming Language Thumbnail"
					/>
				</a>
			</div>

			<p>
				Psst! Website is still in development, come back later for some cool
				stuff!
			</p>
		</main>
	);
}
