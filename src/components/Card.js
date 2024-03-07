const Card = ({ name, email, username }) => {
  return (
    <div
      className="bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5"
    >
      <img src={`https://robohash.org/${username}?200x200&set=set3`} alt="robots" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
