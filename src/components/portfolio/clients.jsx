import "./portfolio.css";
import CardComponent from './card'; // Adjust the path if needed
import cards from '../../cardData'; // Import the card data



const ClientPortfolio = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {cards.map((card, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
            <CardComponent 
              image={card.image} 
              title={card.title} 
              description={card.description} 
              link={card.link} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientPortfolio