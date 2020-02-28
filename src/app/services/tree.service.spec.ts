import { TestBed } from '@angular/core/testing';
import { TreeService } from './tree.service';

const mockPackage = {
    name: 'myPackage', 
    expanded: false, 
    children: []
};

const mockPackage2 = {
  name: 'array-flatten', 
  expanded: false, 
  children: []
};

const mockPackagesArr = [];
mockPackagesArr.push(mockPackage);
mockPackagesArr.push(mockPackage2);

describe('TreeService', () => {
  let service: TreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create tree node object from package name', () => {
    expect(service.createTreeNode('myPackage')).toEqual(mockPackage);
  });

  it('should parse dependencies tree from package data', () => {
    expect(service.parseDepsTree({'myPackage': '~1.3.7', 'array-flatten': '1.1.1'})).toEqual(mockPackagesArr);
  });
});
