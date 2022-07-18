import Head from "next/head";
import { ReactNode } from "react";
import { Header } from "./Header";

type LayoutProps = {
	title: string;
	children: ReactNode;
};

export const Layout = ({ children, title }: LayoutProps) => {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<Header />
			<main>{children}</main>
		</>
	);
};
