import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';


@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {
  max = 5;
  ShowActionItem:boolean = false;
  ShowFeedback:boolean = false;
  editorConfig: AngularEditorConfig = {
    editable: true,
      height: 'auto',
      minHeight: '100',
      maxHeight: '200',
      width: '100',
      minWidth: '0',
      fonts:[
        {
          name:'dxc-Regular',
          class:'dxc-Regular'
        }
      ],
      defaultFontName:'dxc-Regular',
      defaultFontSize:'14',
      enableToolbar: true,
      showToolbar: true,
      
      defaultParagraphSeparator: '',
};


  constructor() { }

  ngOnInit() {
  }
  ShowActionItems(){
    this.ShowActionItem = true;
    this.ShowFeedback = false;
  }
  ShowFeedbackPopOver(){
    this.ShowFeedback = true;
    this.ShowActionItem = false;
  }
  close() {
    this.ShowActionItem = false;
    this.ShowFeedback = false;
  }

  showAttachments(){
    
  }
 

}
