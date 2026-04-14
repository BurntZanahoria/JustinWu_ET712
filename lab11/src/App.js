import './App.css';
import lake from "./images/lake.jpg"

function App() {
  return (
    <div>
      <h1 style={{color: "olive", textAlign: "center"}}>Justin Wu</h1>
      <h2 className='subtitle'>Javascript XML</h2>
      <p>There is two types of components in ReactJS:</p>
      <ul>
        <li>function</li>
        <li>class</li>
      </ul>
      <figure  className='introimg'>
        <img src={lake} />
      </figure>
      <footer className='footer'>
        introduction to ReactJS @ Justin Wu - 2026
      </footer>
    </div>
  );
}

export default App;
