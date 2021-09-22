import "../style/Gallery.css";

const Gallery = () => {
	const imgGallery = [
		"/images/img_gallery0.jpg",
		"/images/img_gallery1.jpg",
		"/images/img_gallery2.jpg",
		"/images/img_gallery3.jpg",
		"/images/img_gallery4.jpg",
		"/images/img_gallery5.jpg",
		"/images/img_gallery6.jpg",
		"/images/img_gallery7.jpg",
	];
	return (
		<div className="section" id="gallery">
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
