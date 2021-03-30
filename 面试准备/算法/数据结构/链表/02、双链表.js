 // 双向链表节点
 var LinkNode = function (key, val) {
    if (!(this instanceof LinkNode)) {
      return new LinkNode(key, val)
    }
    this.key = key;
    this.val = val;
  }
  // 双向链表
  var DoubleLink = function () {
        var head;
        var tail;
        var size;
      const addFirst = (node) => {
        node.next = head.next;
        node.prev = head;
        head.next = node;
        node.next.prev = node;
        ++size;
      }
      const remove = (node) => {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        --size;
      }
      const removeLast = () => {
        if (tail.prev === head) {
          return null;
        }
        var last = tail.prev;
        remove(last)
        return last;
      }
      // 初始化
      if (!(this instanceof DoubleLink)) {
        return new DoubleLink()
      }
      head = LinkNode(0, 0);
      tail = LinkNode(0, 0);
      head.next = tail;
      tail.prev = head;
      size = 0;

      this.addFirst = addFirst
      this.remove = remove;
      this.removeLast = removeLast;
      this.size = () => size;
    }
  }