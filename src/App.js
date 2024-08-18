import logo from "../src/assets/Logo (3).svg";
import './App.css';
import pic1 from "../src/assets/file.svg";
import pic2 from "../src/assets/radio.svg";
import pic3 from "../src/assets/maximize.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav className="navbar">
          <img src={logo} className="App-logo" alt="logo" width="9%" />
        <div className="link-div">
          <a className="App-link" href="nav">AI Cover Letter Generator</a>
          <a className="App-link" href="nav">Resume Template</a>
          <a className="App-link" href="nav">Pricing</a>
        </div>
        <div className="nav-button">
          <button className="button-one">Sign In</button>
          <button className="button-two">Get Started</button>
      </div>
      </nav>
      </header>
      <div className="hero-section">
        <div>
        <p className="hero-p">Win your dream job </p>
        <p>with PostJob</p>
        </div>

        <div className="hero-sec">
        <p>Submit better job app — 10x faster. AI cover letter</p>
        <p>generator, resume keyword checker, outreach message</p>
        <p>writer, and more. Powered by GPT</p>
      </div>
      
      <div style={{
        display: "flex",
        justifyContent: "space-evenly",
        border: "1px solid white",
        borderRadius: "16px",
        width: "500px",
        height: "50px",
        margin: "auto",
        marginTop: "20px"
      }}>
        <p style={{
          fontSize: "18px",
          fontWeight: "600",
          color: "#909090",
          marginLeft: "20px"
        }}>Your Email</p>
        <button style={{
          width: "150px",
          height: "40px",
          borderRadius: "12px",
          margin: "auto",
          marginRight: "10px",
          border: "none",
          backgroundColor: "#6DE754",
          fontSize: "16px",
          fontWeight: "600"
        }}>Start For Free</button>
      </div>
      </div>
      <div className="card-section">
      <div className="card">
        <img className="card-img" src={pic1} href="pic" alt="" width="30px" height="30px" />
        <h1 className="card-h1">AI Cover Letter Generator</h1>
        <p className="card-p">The AI Cover Letter Generator is a tool </p>
        <p className="card-p">that uses artificial intelligence </p>
        <p className="card-p">algorithms to create personalized cover</p>
        <p className="card-p">letters for job applicants.</p>
      </div>

      <div className="card">
        <img className="card-img" src={pic2} href="pic" alt="" width="30px" height="30px" />
        <h1 className="card-h1">Smart Personalization</h1>
        <p className="card-p">Smart Personalization refers to the use</p>
        <p className="card-p">of data and technology to deliver</p>
        <p className="card-p">tailored experiences and content to</p>
        <p className="card-p">individual customers or users.</p>
      </div>

      <div className="card">
        <img  className="card-img" src={pic3} href="pic" alt="" width="30px" height="30px" />
        <h1 className="card-h1">Resume Scanner</h1>
        <p className="card-p">A resume scanner is a software</p>
        <p className="card-p">application that uses optical character</p>
        <p className="card-p">recognition (OCR) technology to</p>
        <p className="card-p">extract and analyze data from resumes.</p>
      </div>
      </div>
    </div>
  );
}

export default App;
