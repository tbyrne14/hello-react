import { useState } from 'react';
import { supabase } from './supabaseClient';
/* import logo from './logo.svg'; */
import './App.css'; 

function Library() {
  const [myBooks, setMyBooks] = useState([]);
  async function getBooks() {  
    let { data: books,} = await supabase
      .from('books')
      .select('*')
    setMyBooks(books);  
  }    
  getBooks();
  return (
    <table className="tableEdit">
    {
      myBooks.map(b => (
        <tr>
          <td>{b.title}</td>
          <td>{b.author}</td>
          <td>{b.isbn}</td>
          <td>{b.description}</td>
        </tr>
      ))
    }  
    </table>
  )
}

const magazines = [
  { id: 1, title: 'Architectural Digest', theme: 'architecture', isAvailable: true},
  { id: 2, title: 'Dwell', theme: 'architecture', isAvailable: true},
  { id: 3, title: 'Communication Arts', theme: 'design', isAvailable: false},
];

function ZineRack() {
  const listZines = magazines.map(zine =>
    <li
      key={zine.id}
      style={{
        color: zine.isAvailable ? 'green' : 'red'
      }}
      >
        {zine.title}
      </li>
  );
  return (
    <ul>{listZines}</ul>
  )
}

const book = {
  title: 'A Farwell to Arms',
  author: 'Earnest Hemingway',
  published: '1929',
  image: 'https://upload.wikimedia.org/wikipedia/en/4/48/Hemingway_farewell.png',
  width: '264',
  height: '378',
};

function Bookshelf() {
  return (
    <>
    <h2>{book.title} ({book.published})</h2>
    <p>{book.author}</p>
    <img
    className="bookCover"
    src={book.image}
    alt={book.title + ' cover'}
    style={{
      width: book.width,
      height: book.height
    }}
    />
    </>
  )
}

function MagicButton() {
  const [count, setCount] = useState(0);
  function doMagic() {
    setCount(count + 1);
  }
  return (
    <div>
    <h3>This is a magic button</h3>
    <button onClick={doMagic}>Magic {count}</button>
    </div>
  );
} 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Library />
        <ZineRack />
        <Bookshelf />
        <MagicButton />
      </header>
    </div>
  );
}

export default App;
