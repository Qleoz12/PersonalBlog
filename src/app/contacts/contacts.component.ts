import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Social } from '../Interfaces/social.interface';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {


  lstSocialNets: Array<Social>;
  constructor(
    private translateService: TranslateService) {
  }

  ngOnInit(): void
  {
    this.translateService.get('social.nets').subscribe((res: Social[]) => {
      this.lstSocialNets = res;
      console.log(this.lstSocialNets);
    });
  }

  get lang() {
    return this.translateService.currentLang;
  }

}
