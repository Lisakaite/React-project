import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Cookbook</h1>
        <div className="right-menu">
          <ul>
            <li>Home</li>
            <li>Recipes</li>
            <li>About</li>
          </ul>
        </div>
      </header>
      <main>
        <div className="banner">
          <h2>Welcome To My Cookbook</h2>
          <p>Discover delicious recipes from around the world.</p>
        </div>
        <div className="cookbook">
          <h3>My Cookbook</h3>
          <div className="recipe-grid">
            {/* Repeat the following block for each recipe */}
            <div className="recipe">
              <img src="/pizza.jpg" alt="Pizza" />
              <h4>Pizza</h4>
            </div>
            <div className="recipe">
              <img src="/beef.jpg" alt="Beef Stew" />
              <h4>Beef Stew</h4>
            </div>
            <div className="recipe">
              <img src="/salad.jpg" alt="Salad" />
              <h4>Salad</h4>
            </div>
            {/* Repeat the above block for each recipe */}
          </div>
        </div>
      </main>
      <footer>
        <p>&copy; 2023 MyCookbook</p>
      </footer>
    </div>
  );
}

export default App;
