import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artwork } from 'src/app/classes/artwork';

@Component({
  selector: 'app-artwork-details',
  templateUrl: './artwork-details.component.html',
  styleUrls: ['./artwork-details.component.css']
})
export class ArtworkDetailsComponent implements OnInit {

  isLoading: boolean = true;

  id: string | null = "0";

  artwork: Artwork | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.fetchArtwork();
  }

  async fetchArtwork() {

    let response = await fetch('http://localhost:5087/api/artworks/' + this.id);
    
    let obj = await response.json();

    this.artwork = new Artwork(obj.id, obj.title, obj.artist, obj.categories, obj.yearCreated, obj.media, obj.description, obj.dimensions, obj.imageId);

    this.isLoading = false;

  }

}
