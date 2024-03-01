import '../css/Bottom.css'
import Clients from './Clients'
import Emily from "../assets/emily.jpg";
import Thomas from "../assets/thomas.jpg";
import Jennie from "../assets/jennie.jpg";
function Bottom(){
    return(
        <div className="bottom-container">
            <h1 id='authors-title'>Client Testimonials</h1>
            <div className="row-clients">
                <Clients image={Emily} biograph={" We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."} name={"Emily R."} func={"Marketing Director"}/>
                <Clients image={Thomas} biograph={" Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.."} name={"Thomas S."} func={"Chief Operating Officer"}/>
                <Clients image={Jennie} biograph={"Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"} name={"Jennie F."} func={"Business Owner"}/>
            </div>
          
        </div>
        
    )
}
export default Bottom