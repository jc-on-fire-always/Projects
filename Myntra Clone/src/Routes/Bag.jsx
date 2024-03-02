import BagItem from "../Components/BagItem";
import BagSummary from "../Components/BagSummary";
import { useSelector } from "react-redux";

const Bag = ({ item }) => {
  const bagItemIds = useSelector((state) => state.Bag);
  const items = useSelector((store) => store.items);
  const finalItems = items.filter((item) => {
    const itemIndex = bagItemIds.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map((item) => (
            <BagItem item={item} />
          ))}
        </div>
        <BagSummary />
      </div>
    </main>
  );
};
export default Bag;
