import '../css/Card.css';
function Card({ title, subtitle }) {
  return (
    <div className="card-content">
      <h3 id="tt">{title}</h3>
      <h5 id="sub">{subtitle}</h5>
      <a id="learn" href="">
        Learn More
      </a>
    </div>
  );
}
export default Card;
