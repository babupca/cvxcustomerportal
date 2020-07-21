import { Component, OnInit, Input, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { FeedbackService } from '../services/feedback.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ɵELEMENT_PROBE_PROVIDERS } from '@angular/platform-browser';

@Component({
  selector: 'app-customer-feedback',
  templateUrl: './customer-feedback.component.html',
  styleUrls: ['./customer-feedback.component.css']
})
export class CustomerFeedbackComponent implements OnInit {

  @ViewChild('feedbackSubmitValidmodal', { static: false }) feedbackSubmitValidmodal: ElementRef;
  customerDetails: any;
  submitted: boolean = false;
  public feedbackEmoji =
    [
      {
        "id": 1,
        "image": "/assets/images/1-Blue.svg"
      },

      {
        "id": 2,
        "image": "/assets/images/2-grey.svg"
      },

      {
        "id": 3,
        "image": "/assets/images/3-Grey.svg"
      },

      {
        "id": 4,
        "image": "/assets/images/4-Grey.svg"
      }
    ];
    feedbackModel = [];
  capability = {
    questionNumber :'1',
    rating: null,
    comments: null
  };
  experience = {
    agenda: {
      questionNumber :'2a',
       rating: null,
      comments: null
    },
    arrangements: {
      questionNumber :'2b',
       rating: null,
      comments: null
    },
    quality: {
      questionNumber :'2c',
      rating: null,
      comments: null
    },
    expectation: {
      questionNumber :'2d',
      rating: null,
      comments: null
    }
  };
  currentneeds = {
    questionNumber :'3',
    rating: null,
      comments: null
  };
  feedbackObj = {
    "visitId": null,
    "customerId": null,
    "feedBack": []
  }
  // experience = {}
  constructor(
    private modalService: NgbModal,
    private router: Router,
    private bsModalRef :BsModalService,
    private feedbackService: FeedbackService
  ) { }

  ngOnInit() {
    this.customerDetails = JSON.parse(localStorage.getItem('customerDetails'));
    console.log("customerDetails", this.customerDetails);
    this.getCustomerFeedback();
  }


  getCustomerFeedback(){
    this.feedbackService.getFeedback(this.customerDetails.OngoingVisitId, this.customerDetails.nameid).subscribe((data)=>{
      console.log("get feedback", data);
      if(data['feedBack']) {
        this.capability = data['feedBack'][0];
        this.experience.agenda = data['feedBack'][1];
        this.experience.arrangements = data['feedBack'][2];
        this.experience.quality = data['feedBack'][3];
        this.experience.expectation = data['feedBack'][4];
        this.currentneeds = data['feedBack'][5];
      }
    });
  }

  sendCustomerFeedback(feedBackPayLoad) {
    this.feedbackService.sendFeedback(feedBackPayLoad).subscribe((data) =>{
      console.log("testing", data);
      alert("success !..");
    });
  }

  onSubmit(f: NgForm, feedbackSubmitmodal) {
    console.log("f", f);
    if (f.valid === true) {
    this.feedbackModel = [];
    this.capability = f.value.capability;
    this.experience.agenda = f.value.experience.agenda;
    this.experience.arrangements = f.value.experience.arrangements;
    this.experience.quality = f.value.experience.quality;
    this.experience.expectation = f.value.experience.expectation;
    this.currentneeds = f.value.currentneeds;
    this.feedbackModel.push(this.capability, this.experience.agenda, this.experience.arrangements, this.experience.expectation, this.experience.quality, this.currentneeds);
    console.log(this.feedbackModel);
      const modalRef1 = this.modalService.open(feedbackSubmitmodal);
      modalRef1.result.then((result) => {
        if (result === 'No') {
            modalRef1.close();
        }
        if (result === 'Yes') {
          let feedBackPayLoad = {
            "visitId": this.customerDetails.OngoingVisitId,
            "customerId": this.customerDetails.nameid,
            "feedBack": [...this.feedbackModel]
          }
         this.sendCustomerFeedback(feedBackPayLoad);
        }
      });
    } else {
      this.modalService.open(this.feedbackSubmitValidmodal);
    }

  }

}
interface feedbackForm {
  questionNumber: string,
  rating: any,
  comments: string
}
interface feedbackAPIObj {
  "visitId": null,
  "customerId": null,
  "feedBack": []
}