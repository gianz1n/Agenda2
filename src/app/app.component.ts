import { Component } from '@angular/core';
// imports
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  constructor(
    private storage: Storage
  ) {}

async ngOnInit () {
  await this.storage.create();
}
}
