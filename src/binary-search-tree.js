const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(data) {
    if (this.tree === null) {
      this.tree = new Node(data);
      return;
    }

    let currN = this.tree;
    while (currN) {
      if (data < currN.data && !currN.left) {
        currN.left = new Node(data);
        return;
      }
      if (data < currN.data && currN.left) {
        currN = currN.left;
      }
      if (data > currN.data && !currN.right) {
        currN.right = new Node(data);
        return;
      }
      if (data > currN.data && currN.right) {
        currN = currN.right;
      }
    }
  }

  has(data) {
    let currN = this.tree;
    while (currN) {
      if (currN.data === data) return true;
      if (currN.data > data) {
        currN = currN.left;
      } else {
        currN = currN.right;
      }
    }
    return false;
  }

  find(data) {
    let currN = this.tree;
    while (currN) {
      if (currN.data === data) return currN;
      if (currN.data > data) {
        currN = currN.left;
      } else {
        currN = currN.right;
      }
    }
    return null;
  }

  remove(data) {
    this.tree = this.removeNode(this.tree, data);
  }
  removeNode(node, data) {
    if (node == null) {
			return null;
		}
		if (node.data > data) {
			node.left = this.removeNode(node.left, data);
			return node;
		} else if (node.data < data) {
			node.right = this.removeNode(node.right, data);
			return node;
		} else {
			if (node.left == null && node.right == null) {
				node = null;
				return node;
			}

			if (node.left == null) {
				node = node.right;
				return node;
			} else if (node.right == null) {
				node = node.left;
				return node;
			}
			const res = this.minNode(node.right);
			node.data = res.data;
			node.right = this.removeNode(node.right, res.data);
			return node;
		}
  }

  min() {
    return this.minNode(this.tree).data;
  }
  minNode(node) {
    let currN = node;
    while (currN != null && currN.left != null) {
      currN = currN.left;
    }
    return currN;
  }

  max() {
    return this.maxNode(this.tree).data;
  }
  maxNode(node) {
    let currN = node;
    while (currN != null && currN.right != null) {
      currN = currN.right;
    }
    return currN;
  }
}

module.exports = {
  BinarySearchTree
};