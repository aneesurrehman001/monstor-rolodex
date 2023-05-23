import Card from "../card/card.component";

import "./card-list.styles.css";

const CardList = ({ monsters }) => (
  //const { monsters } = props; // This is equivalent to {monsters} that we wrote instead of const CardList = (props)
  // Here we are not using the return statement as we don't need to return anything else. Instead we are just using implicit return here.
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} key={monster.id} />;
    })}
  </div>
);

export default CardList;
