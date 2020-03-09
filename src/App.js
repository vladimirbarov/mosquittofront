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
          <li>nav1</li>
          <li>nav2</li>
          <li>nav3</li>
          <li>nav4</li>
          <li>nav5</li>
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
