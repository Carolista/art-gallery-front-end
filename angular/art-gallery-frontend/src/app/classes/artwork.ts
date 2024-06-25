export class Artwork {

  id: number;
  title: string;
  artist: string;
  categories: string;
  yearCreated: string;
  media: string;
  description: string;
  dimensions: string;
  imageId: string;

  constructor(id: number, title: string, artist: string, categories: string, yearCreated: string, media: string, description: string, dimensions: string, imageId: string) {
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

  getImageURL(): string {
    return "https://drive.google.com/thumbnail?sz=w1000&id=" + this.imageId;
  }

}
