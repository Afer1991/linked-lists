class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {

  append(val) {
    if (this.value === undefined) {
      const node = new Node(val);
      console.log(this);
      this.value = node.value;
      this.nextNode = node.nextNode;
    } else  {
      const node = new Node(val);
      let last = this;
      
      while (last.nextNode) {
        last = last.nextNode;
      };
      
      last.nextNode = node;
    };
  }

  prepend(value) {

  }

  size() {

  }

  head() {

  }

  tail() {

  }

  at(index) {

  }

  pop() {

  }

  contains(value) {

  }

  find(value) {

  }

  toString() {

  }

  }