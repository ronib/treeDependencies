import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  packageName = '';
  packageVersion = 'latest';
  
  getPackageData(packageName: string) {
    this.packageName = packageName;
  }
}
