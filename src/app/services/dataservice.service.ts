import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  private subject = new Subject<any>();
  visitId: string;
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

  setVisitId(Id: string){
    this.visitId = Id;
  }

  clearVisitId() {
      this.subject.next();
  }

  getVisitId(){
    return this.visitId
  }

}
