import './App.css';
import { ComponentA } from './components/componentA';

function App() {
  eventBus.emit(EVENT.LOGIN, {
    firstName: "Brian",
    lastName: "kaylin",
    email: "brian@robotic.com"
  });


  return (
      <div className="App">
          <ComponentA />
      </div>
  );
}

export default App;
