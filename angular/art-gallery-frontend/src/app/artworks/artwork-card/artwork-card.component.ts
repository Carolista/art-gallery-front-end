import { Component, Input, OnInit } from '@angular/core';
import { Artwork } from 'src/app/classes/artwork';

@Component({
  selector: 'app-artwork-card',
  templateUrl: './artwork-card.component.html',
  styleUrls: ['./artwork-card.component.css']
})
export class ArtworkCardComponent implements OnInit {

  @Input() artwork: Artwork | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
