import { Injectable } from '@angular/core';
import { TreeNode, PackageEntry } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  constructor() { }

  parseDepsTree(packagesObj): TreeNode[] {
    const nodes: TreeNode[] = [];
    if (!packagesObj) {
      return nodes;
    }
    Object.entries(packagesObj).forEach(([name, version]) => {
      nodes.push(this.createTreeNode(name));
    });
    return nodes;
  }

  createTreeNode(name: string): TreeNode {
    return {
      name, 
      expanded: false, 
      children: []
    };
  }
}
