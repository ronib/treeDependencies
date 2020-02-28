import { Component, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { TreeNode } from '../../models/interfaces';
import { ApiService } from '../../services/api.service';
import { TreeService } from 'src/app/services/tree.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent {
  dependencies: TreeNode[] = [];
  loading = false;
  empty = false;

  @Input('packageName')
  set packageName(value) {
    if (value) {
      this.loading = true;
      this.loadTreeData(value);
    }
  }
  
  constructor (private apiService: ApiService, private treeService: TreeService) {
  }

  loadTreeData(packageName: string): void {
    this.apiService.getDependencies(packageName).pipe(
      map((result: any) => this.treeService.parseDepsTree(result.dependencies))
    ).subscribe(
      (result: TreeNode[]) => {
        this.empty = result.length === 0 ? true : false;
        this.loading = false;
        this.dependencies = result;
      },
      err => {
        this.loading = false;
        console.error("error", err);
      }
    );
  }

  expand(node: TreeNode): void {
    node.expanded = !node.expanded;
  }
}
