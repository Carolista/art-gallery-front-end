const Card = ({ artwork }) => {
	return (
		<div className="card artwork-card">
			<img className="card-image" src={artwork.getImageURL()} />
			<h5>{artwork.title}</h5>
			<p>
				{artwork.artist} ({artwork.yearCreated})
			</p>
		</div>
	);
};

export default Card;
