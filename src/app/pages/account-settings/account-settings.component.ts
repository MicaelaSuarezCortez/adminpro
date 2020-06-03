import { Component, OnInit} from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(public settingsService: SettingsService
  ) {   }

  ngOnInit(): void { 
    this.settingCheck();  
  }


  changeColor(theme: string, link:any){
    this.applyCheck(link);
    this.settingsService.applyTheme(theme);
  
  }

applyCheck(link:any){
  let classSelector: any = document.getElementsByClassName('selector');

  for (let ref of classSelector) {
      ref.classList.remove('working');
  }
  link.classList.add('working')

}

settingCheck(){
  let classSelector: any = document.getElementsByClassName('selector');
  console.log(classSelector);
  
  let theme = this.settingsService.settings.themeName;

  for (let ref of classSelector) {
    if(ref.getAttribute('data-theme') === theme){
      console.log(ref.getAttribute('data-theme'));
      
      ref.classList.add('working');
      break;
    }
  }
 
}
}
