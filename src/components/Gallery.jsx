import "../style/Gallery.css";

const Gallery = () => {
	const imgGallery = [
		"/images/gallery0.jpg",
		"/images/gallery1.jpg",
		"/images/gallery2.jpg",
		"/images/gallery3.jpg",
		"/images/gallery4.jpg",
		"/images/gallery5.jpg",
		"/images/gallery6.jpg",
		"/images/gallery7.jpg",
		"/images/gallery8.jpg",
		"/images/gallery9.jpg",
		"/images/gallery10.jpg",
		"/images/gallery11.jpg",
	];
	return (
		<div className="section" id="gallery">
			<h2>Galerie</h2>
			<section className="gallery__container">
				{imgGallery.map((img, i) => {
					return (
						<div key={i} className="gallery__img--container">
							<img src={img} alt="Tatouage sur un individu" />
						</div>
					);
				})}
			</section>
		</div>
	);
};
export default Gallery;
