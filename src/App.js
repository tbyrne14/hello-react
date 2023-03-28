/* import logo from './logo.svg'; */
import './App.css'; 

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
  return (
    <div>
    <h3>This is a magic button</h3>
    <button>Magic</button>
    </div>
  );
} 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ZineRack/>
        <Bookshelf/>
        <MagicButton/>
      </header>
    </div>
  );
}

export default App;
