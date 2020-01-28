import { Component, OnInit, Input } from '@angular/core';
import { DBData } from '../../Interfaces/dbdata.interface';

@Component({
  selector: 'app-dbcard',
  templateUrl: './dbcard.component.html',
  styleUrls: ['./dbcard.component.scss']
})
export class DBcardComponent implements OnInit {

  @Input() pepe: DBData;
  constructor() { }

  ngOnInit() {
  }

}
