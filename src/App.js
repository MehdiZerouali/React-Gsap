import Nike from './Nike'
import gsap from 'gsap';


function App() {
  let timeline = gsap.timeline();
  return (
    <div className="App">
      <Nike timeline={timeline}/>
    </div>
  );
}

export default App;
