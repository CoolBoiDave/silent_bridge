import { Outlet } from "react-router";
import ScrollToTop from "./ScrollToTop";
import Header from "./Header";

export default function RootLayout() {
	return (
		<>
			<ScrollToTop />
			<Header />
			<Outlet />
		</>
	);
}
