type ILinkedList<T> = {
  append(value: T): Node<T>
  printValues(): void
  append(value: T): Node<T>
  prepend(value: T): Node<T>
  clearList(): void
  traverse(): Node<T>[]
  getSize(): number
  search(comparator: (value: T) => boolean): Node<T> | null
  removeTail(): void
  removeHead(): void
  removeNode(comparator: (value: T) => boolean): void
}

class Node<T> {
  public next: Node<T> | null = null
  constructor(public value: T) {}
}

/**
 * Adding and removing items from the beginning of the list in a constant time.
 */
export class LinkedList<T> implements ILinkedList<T> {
  private head: Node<T> | null = null
  private size: number = 0

  public append(value: T): Node<T> {
    let currentNode = this.head
    const newTail = new Node(value)
    if (!this.head) {
      this.head = newTail
    } else {
      while (currentNode !== null && currentNode.next !== null) {
        currentNode = currentNode && currentNode.next
      }
      if (currentNode !== null) {
        currentNode.next = newTail
        newTail.next = null
      }
    }
    this.size += 1
    return newTail
  }

  public prepend(value: T): Node<T> {
    const node = new Node(value)
    if (!this.head) {
      this.head = node
    } else {
      node.next = this.head
      this.head = node
    }
    this.size += 1
    return node
  }

  public printValues() {
    let currentNode = this.head
    if (!currentNode) {
      return
    } else {
      while (currentNode !== null) {
        console.log(currentNode.value)
        currentNode = currentNode.next
      }
      return
    }
  }

  public traverse() {
    const linkedListNodes: Node<T>[] = []
    let currentNode = this.head
    if (currentNode === null) {
      return linkedListNodes
    } else {
      while (currentNode !== null) {
        linkedListNodes.push(currentNode)
        currentNode = currentNode.next
      }
      return linkedListNodes
    }
  }

  public search(comparator: (value: T) => boolean): Node<T> | null {
    let currentNode = this.head
    if (!currentNode) {
      return null
    } else {
      while (currentNode !== null) {
        if (comparator(currentNode.value)) {
          return currentNode
        }
        currentNode = currentNode.next
      }
      return null
    }
  }

  public removeHead() {
    if (!this.head) {
      return
    } else {
      this.head = this.head.next
    }
    this.size -= 1
  }

  public removeTail() {
    let currentNode = this.head
    if (!currentNode) {
      return
    } else {
      while (
        currentNode !== null &&
        currentNode.next !== null &&
        currentNode.next.next !== null
      ) {
        currentNode = currentNode.next
      }
      currentNode.next = null
    }
    this.size -= 1
  }

  public removeNode(comparator: (value: T) => boolean): void {
    if (!this.head) {
      return
    } else {
      let prevNode = this.head
      let currentNode = this.head.next
      while (currentNode !== null) {
        if (comparator(currentNode.value)) {
          currentNode = null
        } else {
          prevNode = currentNode
          currentNode = currentNode.next
        }
      }
      prevNode.next = prevNode.next ? prevNode.next.next : null
    }
    this.size -= 1
  }

  public getSize() {
    return this.size
  }

  public clearList() {
    this.head = null
    this.size = 0
  }
}
