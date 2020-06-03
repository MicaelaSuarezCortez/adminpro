import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  settings: Settings = {
  themeUrl: 'assets/css/colors/default-dark.css',
  themeName: 'default'
  }

  constructor(@Inject(DOCUMENT)private _document) {
  this.getSettings();
  }

  saveSettings(){
    console.log('Guardado en localStorage');    
    localStorage.setItem('settings', JSON.stringify(this.settings))
  }

  getSettings(){
    console.log('Getting localStorage');
    if (localStorage.getItem('settings')) {
      this.settings = JSON.parse(localStorage.getItem('settings'));
      this.applyTheme(this.settings.themeName)
    } else {
      console.log('getting default theme');
      this.applyTheme(this.settings.themeName);
    }
  }

  applyTheme(theme: string ){
    let url = `assets/css/colors/${theme}.css`
    this._document.getElementById('theme').setAttribute('href', url);
    this.settings.themeName = theme;
    this.settings.themeUrl = url;
    this.saveSettings();
  }

  
}
interface Settings  {
  themeUrl: string,
  themeName: string
}