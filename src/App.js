
import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import dataArray from './data'


function App() {
  const cardElements = dataArray.map(item => {
    return <Card 
    key={item.id}
    {...item}
    />
})

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className='card-holder'>
        {cardElements}
      </div>
    </div>
  );
}

export default App;
