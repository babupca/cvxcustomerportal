import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor() { }
  convertHtmltoText(html) {
    if (html !== null) {
      html = html.replace(/<style([\s\S]*?)<\/style>/gi, '');
      html = html.replace(/<script([\s\S]*?)<\/script>/gi, '');
      html = html.replace(/<\/div>/ig, '\n');
      html = html.replace(/<\/li>/ig, '\n');
      html = html.replace(/<li>/ig, '  *  ');
      html = html.replace(/<\/ul>/ig, '\n');
      html = html.replace(/<\/p>/ig, '\n');
      html = html.replace(/<br\s*[\/]?>/gi, "\n");
      html = html.replace(/<[^>]+>/ig, '');
    }
    return html
  }
}
