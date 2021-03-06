import About from "./About";
import Appointment from "./Appointment";
import Care from "./Care";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Header from "./Header";
import Infos from "./Infos";
import Steps from "./Steps";
// import logo from "../images/logo.jpg";
const Homepage = () => {
	return (
		<div>
			<Header />
			<main>
				<div className="section__separate"></div>
				<About />
				<div className="section__separate"></div>
				<Gallery />
				<div className="section__separate"></div>
				<Infos />
				{/* <div className="section__separate"></div> */}
				<Care />
				<div className="section__separate"></div>
				<Steps />
				<div className="section__separate"></div>
				<Appointment />
				<div className="section__separate"></div>
				<ContactForm />
				<Footer />
			</main>
		</div>
	);
};

export default Homepage;
