import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-socialcard',
  templateUrl: './socialcard.component.html',
  styleUrls: ['./socialcard.component.css']
})
export class SocialcardComponent implements OnInit {

  @Input() pepe: DBData;
  constructor() { }

  ngOnInit() {
  }

}
