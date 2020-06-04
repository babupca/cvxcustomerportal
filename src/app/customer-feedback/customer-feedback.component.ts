import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-feedback',
  templateUrl: './customer-feedback.component.html',
  styleUrls: ['./customer-feedback.component.css']
})
export class CustomerFeedbackComponent implements OnInit {

  public feedbackEmoji =
  [
    {
      "id":1,
      "image":"/assets/images/iconfinder_emoji_emoticon-04_3638423.svg"
    },

    {
      "id":2,
      "image":"/assets/images/iconfinder_emoji_emoticon-04_3638423.svg"
    },

    {
      "id":3,
      "image":"/assets/images/iconfinder_emoji_emoticon-08_3638452.svg"
    },

    {
      "id":4,
      "image":"/assets/images/iconfinder_emoji_emoticon-05_3638454.svg"
    },

    {
      "id":5,
      "image":"/assets/images/iconfinder_emoji_emoticon-03_3638455.svg"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
