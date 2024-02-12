import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import NavBar from "../../NavBar";
import Hero from "../../hero";
import Cards from "../../cards"

//create your first component
const Home = () => {
	return (
		<div>
			<NavBar />
			<Hero />
			<Cards/>
		</div>
	);
};

export default Home;
