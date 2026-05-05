import './App.css';
import { useState } from 'react';

// list of three messages
const messages = [
  "I think, therefore I am",
  "I have a dream",
  "The only thing we have to fear is fear itself"
];

function App() {
  const [counter, setCounter] = useState(1);
  const [isopen, setisopen] = useState(true);

  return (
    <div className="App">
      <h1 className='title'>Slide card by Justin Wu</h1>

      <section className='slicewrapper'>

        <div className='numberWrapper'>

          <p className="msg">
            Message {counter} "{messages[counter - 1]}"
          </p>

          <div className="circleRow">
            <div className={counter === 1 ? "active" : ""}><p>1</p></div>
            <div className={counter === 2 ? "active" : ""}><p>2</p></div>
            <div className={counter === 3 ? "active" : ""}><p>3</p></div>
          </div>

        </div>

        <div className='btngroup'>
          <button onClick={() => {
            setCounter(counter === 1 ? messages.length : counter - 1);
          }}>
            Previous
          </button>

          <button onClick={() => {
            setCounter(counter === messages.length ? 1 : counter + 1);
          }}>
            Next
          </button>
        </div>

      </section>

      <h2>Open and close button</h2>

      <div className='info'>
        <p>
          <b>Cat (Felis catus)</b>, commonly reffered to as the domestic cat or house cat
          <button onClick={() => setisopen(!isopen)}>Read More</button>
        </p>
      </div>

      <section>
        {isopen && (
          <div className='readmore'>
            <p>
              The cat (Felis catus), also called domestic cat and house cat, is a small carnivorous mammal. It is an obligate carnivore, requiring a predominantly meat-based diet. Its retractable claws are adapted to killing small prey species such as mice and rats. It has a strong, flexible body, quick reflexes, and sharp teeth, and its night vision and sense of smell are well developed. It is a social species, but a solitary hunter and a crepuscular predator. Cat communication includes meowing, purring, trilling, hissing, growling, grunting, and body language. It can hear sounds too faint or too high in frequency for human ears, such as those made by small mammals. It secretes and perceives pheromones. Cat intelligence is evident in its ability to adapt, learn through observation, and solve problems. Female domestic cats can have kittens from spring to late autumn in temperate zones and throughout the year in equatorial regions, with litter sizes often ranging from two to five kittens.
            </p>
          </div>
        )}
      </section>

    </div>
  );
}

export default App;