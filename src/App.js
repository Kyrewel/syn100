// import logo from './logo.svg';
import './App.css';
import TextBlock from './TextBlock';
import Card from './Card';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <header className="Web-header">
        <div className='Web-header-background'>
          <img src={require('./Designer.jpeg')} className='CompanyLogo' alt="logo" />
        </div>
        <div className="Web-header-text">
          <h1>Company Name</h1>
          <p>Farm to table? More like roof to table.</p>
        </div>
      </header>
      <body className="Web-body">
        <TextBlock
          className="BodyText1"
          title="About Us"
          text="We are a team of 4 that areadsflkjkljfklasdjk lfjlkdsajfkldjsaklfjdskljfkld  passionate abofjlasdjlkfjlaksdjflkdjasklfjdlksaj flkdsajklfjakldsjklfjladsjfkldsajklfjkldsajklfjkldsajklfjklsdajfkljklsajfkljdsaklflkdsut making the world a better place." />
        <div className='Card-container'>
          <Card
            className="DispCard"
            title="Urban Heat Island"
            text="Urban areas experience higher temperatures due to human activities and the concentration of surfaces that retain heat."
            imageUrl={require('./sunset.png')}
          />
          <Card
            className="DispCard"
            title="Underutilized Space"
            text="Rooftops are often left barren, not facilitating any human acitivty"
            imageUrl={require('./building.png')}
          />
          <Card
            className="DispCard"
            title="Temperature Regulation"
            text="Barren, dark roofs are inefficient in insulating occupants for heat and cold"
            imageUrl={require('./high-temperature.png')}
          />
        </div>
        <TextBlock
          className="BodyText3"
          title="About Us"
          text="We are a team of 4 th abofjlasdjlkfjldsjklfjladsjfkldsajklfjkldsajklfjkldsajklfjklsdajfkljklsajfkljdsaklflkdsut making the world a better place." />
        <TextBlock
          className="BodyText2"
          title="About Us"
          text="asdjfkldsajklfjsdkl" />
        <TextBlock
          className="BodyText1"
          title="About Us"
          text="asdjfkldsajklfjsdkl" />
        <TextBlock
          className="BodyText2"
          title="About Us"
          text="asdjfkldsajklfjsdkl" />
      </body>
      <footer>
        <div className="Web-footer">
          <h2>Company name</h2>
        </div>
        <div className='Contact'>
          <p>Contact Us!</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
