import type { NextPage } from "next";
import Filter from "../components/Filter";
import Header from "../components/Header";

const Home: NextPage = () => {
	return (
		<main>
			<Header />
			<Filter />
		</main>
	);
};

export default Home;
