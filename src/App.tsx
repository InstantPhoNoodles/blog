import './App.css'
import TextLoader from "./TextLoader";

function App() {

  return (
    <div className='Home'>
      <h1>Book Title</h1>
      <h2>by Author Name</h2>
      <hr />

      <h2>Table of Contents</h2>

      <ul>
        <li><a href="#vol1">Volume 1</a></li>
        <li><a href="#ch001">Chapter 1</a></li>
        <li><a href="#ch002">Chapter 2</a></li>
      </ul>

      <div className='chapter'>
        <h2 id='vol1'>Volume 1</h2> 
      </div>

      <div className='chapter' id='ch001'>
        <TextLoader filename='/ch001.txt'/>
      </div>

      <div className='chapter'>
        <h2 id='ch002'>Chapter 2</h2>
      </div>

    </div>
  )
}

export default App
