import "./card.styles.css";

const Card = ({ monster }) => {
  const { name, email, address, id } = monster;
  // Can destruct address like below in javascript.
  //const {name, email, username, address:{street},id} = this.props.monster;
  const { street, city, suite, zipcode } = address;
  return (
    <div className="card-container" key={id}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{`${street} ${suite} ${city} ${zipcode}`}</p>
    </div>
  );
};

export default Card;
