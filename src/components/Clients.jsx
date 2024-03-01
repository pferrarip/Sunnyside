import "../css/Clients.css";
function Clients({ image, name, biograph,func }) {
  return (
    <div className="card-authors">
      <img id="imgs" src={image} alt="" />
      
      <h2 id="bio">{biograph}</h2>
      <div className="discribe">
    <h1 id="names">{name}</h1>
      <h3 id="funcs">{func} </h3>
      </div>
      
    </div>
  );
}
export default Clients;