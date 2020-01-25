import { Component, OnInit } from '@angular/core';
import { ResolutionService } from '../fwk/service/resolution.service';
import { TranslateService } from '@ngx-translate/core';
import { Certs } from '../Interfaces/certs.interface';

@Component({
  selector: 'app-certifs',
  templateUrl: './certifs.component.html',
  styleUrls: ['./certifs.component.scss']
})
export class CertifsComponent implements OnInit {

  public lstCerts: Array<Certs>;
  public lstCertsWeb: Array<Certs>;


  constructor(private resolutionService: ResolutionService,
    private translateService: TranslateService) {
  }

  ngOnInit(): void {

    this.translateService.get("certs.java").subscribe((res: Certs[]) => {
      this.lstCerts = res;

    });

    this.translateService.get("certs.web").subscribe((res: Certs[]) => {
      this.lstCertsWeb = res;

    });
  }

  get lang(): string {
    return this.translateService.currentLang;
  }

  atLeastMediumDevice(): boolean {
    return this.resolutionService.hasAtLeast('md');
  }

}
