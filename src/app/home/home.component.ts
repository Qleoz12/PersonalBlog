import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DevLanguaje } from '../Interfaces/devLanguaje.interface';
import { DBData } from '../Interfaces/dbdata.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit
{

  lstServers: Array<String>;
  lstWebFrameworks: Array<String>;
  lstLanguagesDev: Array<DevLanguaje>;
  lstDBS: Array<DBData>;

  constructor(
    private translateService: TranslateService) {
  }

  ngOnInit(): void {
    this.translateService.get('server.servers').subscribe((res: string) => {
      this.lstServers = res.split(',');

    });

     this.translateService.get('web.frameworks').subscribe((res: string) => {
      this.lstWebFrameworks = res.split(',');

    });



    this.translateService.get('db.dbs').subscribe((res: DBData[]) => {
      this.lstDBS = res;
      console.log(this.lstDBS[0]);

    });

    this.translateService.get('code.languages').subscribe((res: DevLanguaje[]) => {
      this.lstLanguagesDev = res;

    });
  }

  get lang() {
    return this.translateService.currentLang;
  }

}
