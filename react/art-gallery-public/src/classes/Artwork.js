export default class Artwork {

    // This object corresponds to the ArtworkDTO class in the ASP.NET application

    constructor(id, title, artist, categories, yearCreated, media, description, dimensions, imageId) {
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.categories = categories;
        this.yearCreated = yearCreated;
        this.media = media;
        this.description = description;
        this.dimensions = dimensions;
        this.imageId = imageId;
    }

    getImageURL() {
        return "https://drive.google.com/thumbnail?sz=w1000&id=" + this.imageId;
    }
}