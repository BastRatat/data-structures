import './App.css'
import { LinkedList } from './dataStructures/linkedLists'

interface Object {
  key: number
}

function App() {
  const linkedList = new LinkedList<Object>()
  linkedList.append({ key: 1 })
  linkedList.append({ key: 3 })
  linkedList.prepend({ key: 2 })
  linkedList.prepend({ key: 4 })
  linkedList.removeNode(({ key }) => key === 3)
  // const linkedListSize = linkedList.getSize()
  // const searchNode = linkedList.search(({ key }) => key === 1)
  // console.log('linkedListSize => ', linkedListSize)
  // console.log('searchNode => ', searchNode)
  linkedList.printValues()
  return <div className="App">Yop</div>
}

export default App
