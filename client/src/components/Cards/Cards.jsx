import Card from "../Card/Card";
import './Cards.css';

export default function Cards({ characters, onClose }) {
  return (
    <div className="ctn-p">
      <div className="container">
        {characters.map(
          ({ id, name, status, species, gender, origin, image }) => {
            return (
              <Card
                userId={1}
                key={id}
                id={id}
                name={name}
                status={status}
                species={species}
                gender={gender}
                origin={origin.name}
                image={image}
                onClose={onClose}
              />
            );
          }
        )}
      </div>
    </div>
  );
}
