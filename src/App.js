import React from 'react';
import './App.css';
import ImageContent from './components/ImageContent';

function App() {
  return (
    <div className="app">
      <header className="app-header">
      </header>
      <nav>
        <ul>
          <li className="glassListItem">nav1</li>
          <li className="glassListItem">nav2</li>
          <li className="glassListItem">nav3</li>
          <li className="glassListItem">nav4</li>
          <li className="glassListItem">nav5</li>
        </ul>
      </nav>
      <>
      <ImageContent/>
      </>
      <footer>
      </footer>
    </div>
  );
}

export default App;
