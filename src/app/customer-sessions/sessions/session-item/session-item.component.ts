import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  Output,
  EventEmitter,
  Input,
  ElementRef,
} from "@angular/core";
import { AngularEditorConfig } from "@kolkov/angular-editor";
import { CustomerSessionsService } from "src/app/services/customer-sessions.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { DataserviceService } from "src/app/services/dataservice.service";
import { DocumentInterruptSource } from "@ng-idle/core";

@Component({
  selector: "app-session-item",
  templateUrl: "./session-item.component.html",
  styleUrls: ["./session-item.component.css"],
})
export class SessionItemComponent implements OnInit {
  @ViewChild("actionPointmodal", { static: false }) actionPointModal;
  @ViewChild("actionItem", { static: false }) actionItem: ElementRef;
  @Output() reloadSessionListData: EventEmitter<any> = new EventEmitter();
  @Input() session: any;
  @Input() SessionNos: number;

  @Input() sessionID: any;
  @Input() sessionState: any;
  @Input() visitId: any;
  actionPoints = "";
  customerDetails: any;
  FeedbackMessage: any;
  showMore = true;
  isAttachments: boolean = false;
  currentAttachments: any;
  attachmentScrollConfig: object = {};
  starsCount = 0;
  max = 5;
  sharable: any;
  attachmentCount: any;
  ShowActionItem: boolean = false;
  ShowFeedback: boolean = false;
  visitDetails: any;
  editorConfig: AngularEditorConfig = {
    editable: true,
    height: "auto",
    minHeight: "100",
    maxHeight: "200",
    width: "100",
    minWidth: "0",
    fonts: [
      {
        name: "dxc-Regular",
        class: "dxc-Regular",
      },
    ],
    defaultFontName: "dxc-Regular",
    defaultFontSize: "14",
    enableToolbar: true,
    showToolbar: true,

    defaultParagraphSeparator: "",
  };

  constructor(
    private sessionService: CustomerSessionsService,
    private modalService: NgbModal,
    public dataService: DataserviceService
  ) {}

  ngOnInit() {
    this.attachmentScrollConfig = {
      suppressScrollX: true,
    };
    this.customerDetails = JSON.parse(localStorage.getItem("customerDetails"));
    this.getString();
    this.getStarCount();
    this.getActionPoint();
    this.isAttachmentSharable();
  }
  ngOnChanges() {
    if (localStorage.getItem("OverallFeedbackSubmitted")) {
      (<HTMLInputElement>document.getElementById("actionItem")).disabled = true;
      // this.actionItem.nativeElement.disabled = true;
    }
  }
  newrepString: string = "";
  getString() {
    var repString = "";
    this.session.representatives.forEach((rep) => {
      if (rep.isPresenter === true) {
        repString = repString + rep.collaborator + ";";
      }
    });
    this.newrepString = repString.substring(0, repString.length - 1);
    console.log(this.newrepString);
    this.session["representativeString"] = this.newrepString;
  }
  isAttachmentSharable() {
    this.sharable = this.session.attachments.filter((element) => {
      return element.isSharable === true;
    });
  }
  ShowActionItems(actionPointText: string) {
    this.actionPoints = "";
    this.editorConfig.placeholder = "Enter action items...";
    this.ShowActionItem = true;
    this.ShowFeedback = false;
    if (actionPointText !== null) {
      this.actionPoints = actionPointText;
    }
  }
  ShowFeedbackPopOver(feedbackText: string) {
    this.editorConfig.placeholder = "Enter feedback...";
    this.ShowFeedback = true;
    this.ShowActionItem = false;
    this.FeedbackMessage = feedbackText;
  }
  close() {
    this.ShowActionItem = false;
    this.ShowFeedback = false;
  }
  getStarCount() {
    if (
      this.session &&
      this.session.ratingAndFeedBack !== null &&
      this.session.ratingAndFeedBack.ratings !== null
    ) {
      this.starsCount = this.session.ratingAndFeedBack.ratings;
    } else {
      this.starsCount = 0;
    }
  }
  getActionPoint() {
    if (
      this.session &&
      this.session.ratingAndFeedBack !== null &&
      this.session.ratingAndFeedBack.actionPoint !== null
    ) {
      this.actionPoints = this.session.ratingAndFeedBack.actionPoint;
    }
  }

  attachments(popover, attachments) {
    this.currentAttachments = [];
    this.currentAttachments = [...attachments];
    if (this.currentAttachments.length > 0) {
      if (popover.isOpen()) {
        popover.close();
      } else {
        popover.open();
      }
    } else {
      // alert('norecords');
    }
  }

  reset() {
    this.ShowActionItem = false;
    this.ShowFeedback = false;
  }

  sendActionPoints() {
    // this.modalService.open(this.actionPointModal)

    var actionPointData = {
      sessionId: this.sessionID,
      actionPoint: this.actionPoints,
      loggedInUser: this.customerDetails.nameid,
    };
    // console.log("Point: "+JSON.stringify(actionPointData))
    this.actionPoints = "";
    this.sessionService.addActionPoints(actionPointData).subscribe(
      (data) => {
        this.reset();
        this.reloadSessionListData.emit();
        this.modalService.open(this.actionPointModal);
        console.log("Point: " + JSON.stringify(actionPointData));
      },
      (error) => {
        console.log(error);
        // this.modalService.open(this.actionPointModal)
      }
    );
  }

  sendFeedback() {
    var feedBackData = {
      sessionId: this.sessionID,
      feedback: this.FeedbackMessage,
      loggedInUser: this.customerDetails.nameid,
    };
    this.sessionService.sendFeedBack(feedBackData).subscribe((data) => {
      this.reset();
      this.reloadSessionListData.emit();
    });
  }

  sessionCardRating() {
    var ratings = {
      sessionId: this.sessionID,
      ratings: this.starsCount,
      loggedInUser: this.customerDetails.nameid,
    };
    this.sessionService.sessionRatings(ratings).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        this.getStarCount();
      }
    );
  }

  contentCollapse = (event) => {
    event.preventDefault();
    console.log(event);
    this.showMore = !this.showMore;
  };
}
