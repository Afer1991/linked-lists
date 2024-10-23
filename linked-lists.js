class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.hd = null;
    this.tl = null;
  }

  append(val) {
    const node = new Node(val);

    if (!this.hd) {
      this.hd = node;
    } else {
      this.tl.nextNode = node;
    };

    this.tl = node;
  }

  prepend(val) {
    const node = new Node(val);

    if (!this.hd) {
      this.tl = node;
    } else {  
      node.nextNode = this.hd;
    };

    this.hd = node;

  }

  size() {
    if (this.hd) {
      let sz = 1;
      let next = this.hd;

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
    if(this.hd) {
      return this.hd;
    } else {
      console.log("List is empty");
    };
  }

  tail() {
    if (this.tl) {
      return this.tl;
    } else {
      console.log("List is empty");
    };
  }

  at(index) {
    if (this.hd && index >= 0) {
            
      let nd = this.hd;

      for (let i = 0; i < index; i++) {
        nd = nd.nextNode;
      };
      
      if(!nd) {
        console.log("Node doesn't exist")
      } else {
        return nd;
      };

    } else if (index < 0) {
      console.log("Index must be equal or greater than 0");
    } else {
      console.log("List is empty");
    };
  }

  pop() {

  }

  contains(value) {

  }

  find(value) {

  }

  toString() {
    if (this.hd) {
      let str = `( ${this.hd.value} ) -> `;
      let next = this.hd;

      while (next.nextNode) {
        str += `( ${next.nextNode.value} ) -> `;
        next = next.nextNode;
      };

      str += "null";

      return str;
    } else {
      return "null";
    }
  }

}

