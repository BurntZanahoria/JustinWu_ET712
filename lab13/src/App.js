import './App.css';
import User from './card'
import batman_img from './images/icon_batman.png'
import star_icon from './images/icon_star.png'
import girl_icon from './images/icon_girl.png'

import User_feedback from './user_feedback'

function App() {
  return (
    <div className="App">
      <h1 className='apptitle'>Justin Wu</h1>
      <section className='appcontainer'>
        <User_feedback username = "Batman">
          <User image={batman_img} date="12/02/25" msg="I'm Batman"/>
        </User_feedback>
        <User_feedback username = "Star">
          <User image={star_icon} date="12/01/25" msg="twinkle little star"/>
        </User_feedback>

        <User_feedback username = "The Girl">
          <User image={girl_icon} date= "11/23/25" msg="Need more rest"/>
        </User_feedback>
      </section>
    </div>
  );
}

export default App;
