import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';

type ProfileType = {
  givenName?: string;
  surname?: string;
  userPrincipalName?: string;
  id?: string;
};

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  profile!: ProfileType;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log('Profile Component');
    console.log(typeof window);

    // Ensures http calls are made client-side
    if (typeof window !== 'undefined') {
      this.getProfile();
    }
  }

  getProfile() {
    this.http.get(GRAPH_ENDPOINT).subscribe((profile) => {
      console.log('CALL PROFILE', { profile });
      this.profile = profile;
    });
  }
}
