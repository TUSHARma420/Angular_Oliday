import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  nextElementSibling: any;
  classList: any;
 
  constructor(private router: Router) {}
  
  
  
  ngOnInit(): void {
    
  }
  menuExpanded = false;

  
  questions: { title: string, answer: string, showAnswer: boolean }[] = [
    {
      title: 'Do I need to confirm my booking?',
      answer: "No, you don't. if you really want to, though, contact us at Oliday@help.com to confirm your reservation. You can also contact the hotel directly if you prefer",
      showAnswer: false
    },
    {
      title: "What if I don't get a confirmation at the time of booking?",
      answer: "TypeScript is a superset of JavaScript that adds optional static typing and other features to the language.",
      showAnswer: false
    },
    {
      title: "I didn't get an email confirmation. What do I do?",
      answer: "If you don't receive an email after making a reservation, it could be that we have the wrong email address or Internet Service Provider blocked the email thinking it was spam (junk mail? from us? perish the thought), Ch folder, just in case, and add our email address Oliday@help.com - to your address book so that it doesn't get filtered out next time. In the meantime, contact us at Oliday@help.com So we can send you an email confirmation. Be sure to include the following information: 1. The name the reservation was booked under  2. The hotel name and location (city)  3. The check-in/check-out dates."
     ,
      showAnswer: false
    },
    {
      title: "What is my hotel's check-in time?",
      answer: "Typically, the hotel check-in time is after 2:00 pm (local hotel time). Check with your specific hotel for its exact check-in time",
      showAnswer: false
    },
    {
      title: "Will the hotel hold my room if I'm arriving late?",
      answer: "Since your reservation is guaranteed with a credit cord, the hotel is obliged to hold your room until 7 am the day after your planned arrival date.",
      showAnswer: false
    },
    {
      title: "Do I have to show ID proof at the time of check-in?",
      answer: "Yes, below are the applicable government issued photo-ids accepted by the hotel Voter ID •Driving License Passport A valid Photo ID has to be canied by every person above the age of 15 staying at the noter Accommodation can be denied if  1. guests posing as a couple if suitable proof of identification is not presented at check  2. quest is a localite as the hotel reserves the right of admission.",
      showAnswer: false
    },
    {
      title: "What are the cancellation charges?",
      answer: "Short answer-it depends. Long answer-the cancellation charges depend on the hotel, time of stay ('season' time, 'off season' time), and time of cancellation. To know what's applicable in your case, check the hotel's booking policy mentioned on the booking page while making the reservation (in case you missed it, you can always sign in to your Oliday Account and check it out on your Trips pages). Apart from the cancellation charges levied by the hotel, Oliday charges a fee of Rs. 300 for every hotel cancellation.",
      showAnswer: false
    },
    {
      title: "If I need to cancel my hotel booking, what's the latest I can do this by?",
      answer: "It depends on your hotel. Please go through the hotel's booking policy mentioned on the booking page while making the reservation (in case you missed it, you can always sign in to your Oliday Account and check it out on your Trips pages). However, please keep in mind that irrespective of what the hotel's booking policy says, you cannot cancel your booking on the day that you're supposed to check-in..",
      showAnswer: false
    },
    {
      title: "How will get my money back after cancelling a hotel booking?",
      answer: "We will credit the money back to the same account you used while making the booking. For example, if you used your credit card, we will make an appropriate charge reversal. If you used your debit card, we will credit the money back to the debit card.",
      showAnswer: false
    },
    {
      title: "How do I modify a hotel booking?",
      answer: "Oliday doesn't support modifications to hotel bookings. You'll have to cancel your existing booking and make a new one.",
      showAnswer: false
    },
    
  ];

  toggleAnswer(question: { showAnswer: boolean; }) {
    question.showAnswer = !question.showAnswer;
  }
  

  toggleNav() {
    this.menuExpanded = !this.menuExpanded;
  }
  toggleHome() {
    this.router.navigate(['home']);
  }
  toggleFaq() {
    this.router.navigate(['register']);
  }
  
  
  
  register() {
   
      this.router.navigate(['register']);
    
  }
  goBack(){
    this.router.navigate(['register']);
    alert("Signed Out Successfully");
  }
  goBooknow(){
    this.router.navigate(['booknow']);
    
  }
  
}
