import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { CustomerSessionsService } from 'src/app/services/customer-sessions.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'


@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {
  sessionID = "3fa85f64-5717-4562-b3fc-2c963f66afa6";
  loggedInUser = "3fa85f64-5717-4562-b3fc-2c963f66afa6";
  actionPoints = "";
  customerDetails: any;

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


  constructor(private sessionService: CustomerSessionsService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.customerDetails = localStorage.getItem('customerDetails');
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
  
  reset(){
    this.ShowActionItem = false;
    this.ShowFeedback = false;
    
  }

  sendActionPoints(){

    var actionPointData = {
      "sessionId": this.sessionID,
      "actionPoint": this.actionPoints,
      "loggedInUser": this.loggedInUser
    }

    this.actionPoints = "";
    this.sessionService.addActionPoints(actionPointData).subscribe(data => {
      this.reset();

    })
  }
 

}
