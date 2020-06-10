import { Component, OnInit, ViewChild, TemplateRef ,Input} from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { CustomerSessionsService } from 'src/app/services/customer-sessions.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {
  @ViewChild('actionPointmodal', {static: false}) actionPointModal;
  
  @Input() session: any;
  @Input() SessionNos: number;
  @Input() sessionData: any;
  @Input() sessionID: any;
  @Input() sessionState : any;
  @Input() visitId :any;
  actionPoints = "";
  customerDetails: any;
  FeedbackMessage:any;
  showMore=true;

  

  starsCount = 0;
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
    this.customerDetails = JSON.parse(localStorage.getItem('customerDetails'));
   
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
    // this.modalService.open(this.actionPointModal)

    var actionPointData = {
      "sessionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "actionPoint": this.actionPoints,
      "loggedInUser": this.customerDetails.nameid
    }
    // console.log("Point: "+JSON.stringify(actionPointData))
    this.actionPoints = "";
    this.sessionService.addActionPoints(actionPointData).subscribe(data => {
      
      this.reset();

      this.modalService.open(this.actionPointModal)
      console.log("Point: "+JSON.stringify(actionPointData))

    }, error => {
      console.log(error)
      // this.modalService.open(this.actionPointModal)
    })
  }

  sendFeedback(){
    var feedBackData ={
      "sessionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "feedback": this.FeedbackMessage,
      "loggedInUser": this.customerDetails.nameid
    }
    this.sessionService.sendFeedBack(feedBackData).subscribe((data) =>{
      this.reset();

    })

  }

  sessionCardRating(){
    var ratings ={
      "sessionId":"3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "ratings": this.starsCount,
      "loggedInUser": this.customerDetails.nameid
    }
    this.sessionService.sessionRatings(ratings).subscribe((data)=>{
      console.log(data);
    })
  }

  contentCollapse = (event) => {
    event.preventDefault();
    console.log(event);
    this.showMore=!this.showMore
  }


}
