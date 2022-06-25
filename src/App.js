import './App.css';
import AboutUs from "./pages/AboutYs/AboutUs";
  function AboutYou() {
      return(
          <div className='footer' >
              <h2>Hello my name is Sultanmurat</h2>
          </div>
      )


}

function App() {
  return (
    <div className="App">
        <div>

        </div>
        <div>
            <AboutUs title=' Dastan' age="34"  />
            <AboutYou></AboutYou>
        </div>
    </div>
  );

}

export default App;
