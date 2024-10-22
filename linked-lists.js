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
    if (this.value) {
      let sz = 1;
      let next = this;

      while (next.nextNode) {
        next = next.nextNode;
        sz++;
      };

      return sz;

    } else {
      return 0;
    }
  }

  head() {
    if(this.value) {
      return this.value;
    } else {
      console.log("List is empty");
    }
  }

  tail() {
    if (this.value) {
      let last = this;
      
      while (last.nextNode) {
        last = last.nextNode;
      };

      return last.value;
    } else {
      console.log("List is empty");
    }
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
    if (this.value) {
      let str = `( ${this.value} ) -> `;
      let next = this;

      while (next.nextNode) {
        str += `( ${next.nextNode.value} ) -> `;
        next = next.nextNode;
      }

      str += "null";

      return str;
    } else {
      return "null";
    }
  }

}

