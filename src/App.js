import logo from './logo.svg';
import './App.css';
import Button from "./components/Button";

function App() {
  const handleButtonClick = () => {
    console.log('Button was clicked!');
  };

  return (
      <div>
          <Button label="Primary Button" type="primary"/>
          <Button label="Secondary Button" type="secondary"/>
      </div>
  );
}

export default App;
