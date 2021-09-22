import About from "./About";
import Appointment from "./Appointment";
import ContactForm from "./ContactForm";
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
				{/* <div>
					<img src={logo} alt="Logo Robin Lepoutre" />
				</div> */}
				<h1>Robin Lepoutre Tattoo</h1>
				<About />
				<Gallery />
				<Infos />
				<Steps />
				<Appointment />
				<ContactForm />
			</main>
		</div>
	);
};

export default Homepage;
