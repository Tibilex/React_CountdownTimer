import './App.css';
import Timer from './components/timer/Timer';

function App() {
  return (
    <div className="container">
      <Timer hours="1" minutes="43" seconds="54"></Timer>
      <Timer hours="11" minutes="26" seconds="24"></Timer>
      <Timer hours="34" minutes="53" seconds="41"></Timer>
    </div>
  );
}

export default App;
