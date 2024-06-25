import { useParams } from 'react-router-dom';

const Details = ({ artworks }) => {
	const { id } = useParams();

	const artwork = artworks[id];

	return (
		<main>
			<p>
				<a href="/artworks">&larr; Back to Artworks Gallery View</a>
			</p>
			<h2>ARTWORK DETAILS</h2>
			<div className="container">
				<div className="row">
					<div className="col-6">
						<img className="card-image" src={artwork.getImageURL()} />
					</div>
					<div className="col-6">
						<h4 className="mb-4 mt-2 font-bold">
							{artwork.title + ' (' + artwork.yearCreated + ')'}
						</h4>
						<>
							<h5>Artist</h5>
							<p>{artwork.artist}</p>
						</>
						{artwork.description != '' && (
							<>
								<h5>Description</h5>
								<p>{artwork.description}</p>
							</>
						)}
						<>
							<h5>Categories</h5>
							<p>{artwork.categories}</p>
						</>
						{artwork.media != '' && (
							<>
								<h5>Media</h5>
								<p>{artwork.media}</p>
							</>
						)}
						{artwork.dimensions != '' && (
							<>
								<h5>Dimensions</h5>
								<p>{artwork.dimensions}</p>
							</>
						)}
					</div>
				</div>
			</div>
		</main>
	);
};

export default Details;
