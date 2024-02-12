import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import NavBar from "../../NavBar";
import Hero from "../../hero";
import Cards from "../../cards";
import Footer from "../../footer";

//create your first component
const Home = () => {
	return (
		<div>
			<NavBar />
			<Hero />
			<Cards/>
			<Footer/>
		</div>
	);
};

export default Home;
