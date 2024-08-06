import "./portfolio.css";
import CardComponent from './card'; // Adjust the path if needed
import cards from '../../cardData'; // Import the card data



const ClientPortfolio = () => {
  return (
    <div className="bg-body-dark ">
      <div className="container">
        <h1 className="container mb-5 display-5 fw-bold lh-1 ">Portfolio</h1>
        <div className="row">
          {cards.map((card, index) => (
            <div className="col-lg-6 col-md-6col-sm-12 mb-4" key={index}>
                <CardComponent 
                  key={index}
                  image={card.image}
                  title={card.title}
                  description={card.description}
                  link={card.link}

              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClientPortfolio