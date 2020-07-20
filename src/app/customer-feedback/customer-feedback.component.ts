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
        "image": "/assets/images/2-Grey.svg"
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
  feedbackModel: feedbackForm;
  capability = { questionNumber: '1', rating: null, comments: 'asdfasf' };
  experience = {
    agenda: {
      questionNumber: '2a', rating: 1, comments: '2a'
    },
    arrangements: {
      questionNumber: '2b', rating: 2, comments: '2b'
    },
    quality: {
      questionNumber: '2c', rating: 3, comments: '2c'
    },
    expectation: {
      questionNumber: '2d', rating: null, comments: '2d'
    }
  };
  currentneeds = {
    questionNumber: '3', rating: null, comments: ''
  }

  // experience = {}
  constructor(
    private modalService: NgbModal,
    private router: Router,
    private bsModalRef :BsModalService,
    private feedbaackInc: FeedbackService
  ) { }

  ngOnInit() {
    this.customerDetails = JSON.parse(localStorage.getItem('customerDetails'));
  }




  // sendCustomerFeedback() {
  //   this.feedback.sendFeedback(this.feedbackModel.getRawValue()).subscribe((data) => {
  //     console.log('data');
  //   })

  // }
   closeModal(modal) {
        modal.hide();
  }

  onSubmit(f: NgForm, feedbackSubmitmodal) {
    console.log("f", f);
    if (f.valid === true) {
      const modalRef1 = this.modalService.open(feedbackSubmitmodal);
      modalRef1.result.then((result) => {
        if (result === 'No') {
            modalRef1.close();
        }
        if (result === 'Yes') {
          // this.sendCustomerFeedback();
        }
      });
    } else {
      this.modalService.open(this.feedbackSubmitValidmodal);
    }

  }

}
interface feedbackForm {
  questions: string,
  rating: number,
  comments: string
}
