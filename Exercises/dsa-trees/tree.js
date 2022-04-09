/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let sum = 0;
    const traverse = (node) => {
      if (node === null) {
        return;
      }
      sum += node.val;
      node.children.forEach((child) => traverse(child));
    };
    traverse(this.root);
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let count = 0;
    const traverse = (node) => {
      if (node === null) {
        return;
      }
      if (node.val % 2 === 0) {
        count++;
      }
      node.children.forEach((child) => traverse(child));
    };
    traverse(this.root);
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let count = 0;
    const traverse = (node) => {
      if (node === null) {
        return;
      }
      if (node.val > lowerBound) {
        count++;
      }
      node.children.forEach((child) => traverse(child));
    };
    traverse(this.root);
    return count;
  }
}

module.exports = { Tree, TreeNode };
