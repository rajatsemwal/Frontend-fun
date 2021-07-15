//import logo from './logo.svg';
import './App.css';

const Instruction = () => {
  return ( 
    <div className = "inst" >
      
      <h1> instruction </h1>

      <li> build a container </li> 
      <li> create a separate function and use it as a component </li> 
      <li> pass props "calory and food" and call it to main component</li>

      </div>
  );
}
const Mains = () => {

  return ( 
    <div className = "main" >
      
      <h2> Calorie Read Only </h2> 

      <div className = "container">
      <h3>Card title = "Pizza" Calorie = "150"</h3>
      <h3>Card title = "Burger" Calorie = "135" </h3>
      <h3>Card title = "Sandwich" Calorie = "100" </h3>
      <h3>Card title = "Samosa" Calorie = "95"</h3>
      <h3>Card title = "Momos" Calorie = "105"</h3>
      
      <h3>Card title = "Fries" Calorie = "120"</h3>
      
        </div> 
      </div>
  );
}

const Card = ({ title, Calorie }) => {
  return ( 
    <div className = "card">
      
      <h3> { title } </h3> 
      <br/>
      
      <p> you have consumed { Calorie } { " " } calorie today </p> 
      </div>

  );
}
export default function App() {
  
  return ( 
    <div className = "App" >
      
      <Instruction/>
      <Mains/>
      
      </div>
  );
}