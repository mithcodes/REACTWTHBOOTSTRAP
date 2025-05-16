import Item from "./Item";

const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
        //key k use islia hota haan qki key sara kch yaad rakhta ha ki kya kya changes hua haan or wahi chij ko change karta haan 
          key={item}  
          foodItem={item}
          handleBuyButton={() => {
            console.log(`${item} clicked`);
          }}
        />
      ))}
    </ul>
  );
};

export default FoodItems;
