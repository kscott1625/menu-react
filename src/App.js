import React, {useState} from "react";
import './index.css'
import Menu from "./Menu";
import items from './data'

function App() {
  const[menuItems, setMenuItems] = useState(items)
  const[categories, setCategories] = useState([])

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Kitty Kat's Sushi Menu</h2>
          <div className="underline"></div>
        </div>
        <Menu items={menuItems} />
      </section>
    </main>
   
  );
}

export default App;
