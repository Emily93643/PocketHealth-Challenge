import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  userId: string | null = '';
  name: string | null = '';
  colour: string | null = '';

  constructor(
    private userService: UserService,
    private router: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {
      this.userId = params.get('userId');
      console.log('UserId:', this.userId ); 
    });

    const userDetails = this.userService.getUserDetails();
    if (userDetails){
      this.name = userDetails.name;
      this.colour = userDetails.colour;
    }
    console.log('Colour:', this.colour); 

  }
}
