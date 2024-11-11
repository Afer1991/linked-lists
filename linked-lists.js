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
    if (this.hd === this.tl) {
      this.hd = null;
      this.tl = null;
    } else if (this.hd) {
      let sz = 1;
      let next = this.hd;
      let secondLast = this.hd;

      while (next.nextNode) {
        next = next.nextNode;
        sz++;
      };

      for (let i = 0; i < sz - 2; i++) {
        secondLast = secondLast.nextNode;
      };

      secondLast.nextNode = null;
      this.tl = secondLast;
    };
  }

  contains(val) {
    let curr = this.hd;

    while (curr) {
      if (curr.value === val) {
        return true;
      } else {
        curr = curr.nextNode;
      };
    };

    return false;
  }

  find(val) {
    
    let curr = this.hd;
    
    if (curr) {

      let index = 0;

      while (curr) {
        if (curr.value === val) {
          return index;
        };
        
        index ++;
        curr = curr.nextNode;

      };

      return null;

    } else {
      return null;
    };
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

  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      return "Node doesn't exist";
    } else if (this.size() === 1 || index === this.size() - 1) {
      this.pop();
      return;
    } else {

      let node = this.hd;

      for (let i = 0; i < index; i++) {
        node = node.nextNode;
      };

      node.value = node.nextNode.value;
      node.nextNode = node.nextNode.nextNode;
      return;
    }
  }

}

