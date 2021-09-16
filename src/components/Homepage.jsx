import About from "./About";
import Appointment from "./Appointment";
import ContactForm from "./ContactForm";
import Gallery from "./Gallery";
import Header from "./Header";
import Infos from "./Infos";
import Steps from "./Steps";

const Homepage = () => {
	return (
		<div>
			<Header />
			<main>
				<h1>Robin Lepoutre Tattoo</h1>
				<About />
				<Gallery />
				<Infos />
				<Appointment />
				<Steps />
				<ContactForm />
			</main>
		</div>
	);
};

export default Homepage;
