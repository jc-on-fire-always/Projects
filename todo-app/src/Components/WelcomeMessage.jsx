const WelcomeMessage = ({ todoItems }) => {
  return todoItems.length === 0 && <p>Enjoy Your Day</p>;
};

export default WelcomeMessage;
