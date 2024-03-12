// import logo from './logo.svg';
import './App.css';
import Search from "./Search"


function App() {
  return (
    <div className="App ">
      <div className="container shadow p-3 mb-4 bg-body rounded weather-app ">

      <Search />
      </div>

      <footer className='p-0'>This is an <a href="https://github.com/AlishaBro/weather-app-react"> open source code on Git-hub</a> by <a href="https://zippy-queijadas-fe104b.netlify.app/">Alisha Brodin</a></footer>
    </div>
  );
}

export default App;
