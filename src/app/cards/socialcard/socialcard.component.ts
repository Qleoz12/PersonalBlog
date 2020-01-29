import { Component, OnInit, Input } from '@angular/core';
import { Social } from '../../Interfaces/social.interface';

@Component({
  selector: 'app-socialcard',
  templateUrl: './socialcard.component.html',
  styleUrls: ['./socialcard.component.css']
})
export class SocialcardComponent implements OnInit {

  @Input() dataIntance: Social[];
  constructor() { }

  ngOnInit() {
  }

}
