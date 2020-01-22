import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DevLanguaje } from 'src/Interfaces/devLanguaje.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit
{

  lstServers: Array<String>;
  lstWebFrameworks: Array<String>;
  lstLanguagesDev: DevLanguaje = {};
  lstDBS: Array<String>;

  constructor(
    private translateService: TranslateService) {
  }

  ngOnInit(): void {
    this.translateService.get('server.servers').subscribe((res: string) => {
      this.lstServers = res.split(',');
      console.log(this.lstServers);
    });

     this.translateService.get('web.frameworks').subscribe((res: string) => {
      this.lstWebFrameworks = res.split(',');
      console.log(this.lstWebFrameworks);
    });



    this.translateService.get('db.dbs').subscribe((res: string) => {
      this.lstDBS = res.split(',');
      console.log(this.lstWebFrameworks);
    });

    this.translateService.get('code.languages').subscribe((res: DevLanguaje) => {
      this.lstLanguagesDev = res;
      console.log(res);
    });
  }

  get lang() {
    return this.translateService.currentLang;
  }

}
