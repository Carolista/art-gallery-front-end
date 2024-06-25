import { Component, OnInit } from '@angular/core';
import { Artwork } from 'src/app/classes/artwork';

@Component({
  selector: 'app-artworks',
  templateUrl: './artworks.component.html',
  styleUrls: ['./artworks.component.css'],
})
export class ArtworksComponent implements OnInit {
  isLoading: boolean = true;

  artworks: Artwork[] = [];

  constructor() {}

  ngOnInit(): void {
    this.fetchArtworks();
  }

  async fetchArtworks() {
    let response = await fetch('http://localhost:5087/api/artworks');

    let payload: Artwork[] = await response.json();

    payload.forEach((obj) => {
      let artwork: Artwork = new Artwork(
        obj.id,
        obj.title,
        obj.artist,
        obj.categories,
        obj.yearCreated,
        obj.media,
        obj.description,
        obj.dimensions,
        obj.imageId
      );
      this.artworks.push(artwork);
    });

    // this.artworks.sort(
    //   (a1, a2) =>
    //   (a1.title < a2.title) ? 1 : (a1.title > a2.title) ? -1 : 0);

    this.isLoading = false;
  }
}
