import { Component } from '@angular/core';
import { FirebaseService } from './firebase/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',  
  styleUrl: './app.component.css'
})
export class AppComponent {
  data: any;
  title = 'webApp';

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.firebaseService.getData('/').then((data => {
      this.data = data;
    }))
}
}
