import { Component } from '@angular/core';
import * as firesbase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD9fkuj-4-V9B3Qe2c3TpU5LKIAK8NxkWY",
    authDomain: "enjeu-v3.firebaseapp.com",
    databaseURL: "https://enjeu-v3.firebaseio.com",
    projectId: "enjeu-v3",
    storageBucket: "",
    messagingSenderId: "616273300231",
    appId: "1:616273300231:web:9eae8df262841fe8e0d3a2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  }
}
