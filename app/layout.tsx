import { ConfigProvider } from "antd";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Steve's teacher",
	description: "Learn to Code.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ConfigProvider
					theme={{
						token: {
							colorFillSecondary: "#7e52f7",
							colorBgBase: "#353333",
							colorText: "#fff",
							colorIcon: "#fff",
						},
					}}
				>
					{children}
				</ConfigProvider>
			</body>
		</html>
	);
}
