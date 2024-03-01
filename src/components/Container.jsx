import '../css/Container.css'
import Card from '../components/Card'
import App from '../App.jsx'
function Container(){
    const scrollToP1 = () => {
        const container = document.getElementById("container");
        if (container) {
          container.scrollIntoView({ behavior: "smooth" });
        }
    }
    return(
        <>
        <App goTo={scrollToP1}/>
        <div className="container" id='container'> 
           
            <div className="egg-row">
                <Card title={"Transform your brand"}  subtitle={"We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."}/>
                <div className="img1"></div>
            </div>
            <div className="taca-row">
                <div className="img2"></div>
                <Card title={"Stand out to the right audience"}  subtitle={"  Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."}/>
            </div>
             <div className="fruits-row">
                <div className="imgleft">
                    <div className="gap"></div>
                    <div className="text">
                    <h3 id='graphic'>Graphic Design</h3>
                    <p id='graphic-content'>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
                    </div>
                </div>
                <div className="imgright">
                    <div className="gap"></div>
                    <div className="text">
                    <h3 id='photograph'>Photography</h3>
                    <p id='photograph-content'>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
                    </div>
                </div>
                </div>
             </div>
        </>
    )
}
export default Container