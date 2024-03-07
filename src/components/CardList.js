import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map(({ id, name, email, username }) => {
        return (
          <Card 
            key={id} 
            id={id} 
            name={name} 
            email={email}
            username={username}
          />
        );
      })}
    </div>
  );
};

export default CardList;
