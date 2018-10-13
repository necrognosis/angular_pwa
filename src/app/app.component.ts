import { Component } from '@angular/core';
import { SwUpdate } from "@angular/service-worker";
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Prompt users there is an update
// export class AppComponent {
//   title = 'pwa-DEMO';

//   update: boolean = false;
  
//   constructor(updates: SwUpdate) {
//     updates.available.subscribe(event => {
//       this.update = true;
//     });
//   };
// }

// Update automatically
export class AppComponent {
  title = 'pwa-DEMO';

  update: boolean = false;
  joke: any;
  
  constructor(updates: SwUpdate,
              private data: DataService) {
    updates.available.subscribe(event => {
      updates.activateUpdate().then(() => document.location.reload());
    });
  };

  ngOnInit() {
    this.data.gimmeJokes().subscribe(res => {
      this.joke = res;
    })
  }
  
}