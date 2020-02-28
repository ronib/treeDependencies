import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeComponent } from './tree.component';
import { ApiService } from 'src/app/services/api.service';
import { of } from 'rxjs';

const mockPackageData = {
  "name":"express",
  "description":"Fast, unopinionated, minimalist web framework",
  "version":"4.17.1",
  "author":{"name":"TJ Holowaychuk","email":"tj@vision-media.ca"},
  "repository":{"type":"git","url":"git+https://github.com/expressjs/express.git"},
  "homepage":"http://expressjs.com/",
  "dependencies":{"accepts":"~1.3.7","array-flatten":"1.1.1","body-parser":"1.19.0","content-disposition":"0.5.3","content-type":"~1.0.4","cookie":"0.4.0","cookie-signature":"1.0.6","debug":"2.6.9","depd":"~1.1.2","encodeurl":"~1.0.2"},
}  

class MockApiService {
  getDependencies(packageName: string) {
    return of(mockPackageData);
  }
}

describe('TreeComponent', () => {
  let component: TreeComponent;
  let fixture: ComponentFixture<TreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeComponent ],
      providers: [
        { provide: ApiService, useClass: MockApiService }
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
