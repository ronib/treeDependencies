export interface TreeNode {
    name: string;
    expanded: boolean;
    children: TreeNode[];
    icon?: string;
}

export interface PackageEntry {
    [key: string]: string;
} 
