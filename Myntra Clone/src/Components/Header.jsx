import { BsPersonCircle } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";
import { IoBagSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const Bag = useSelector((store) => store.Bag);
  console.log("bag contains", Bag);

  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img
            className="myntra_home"
            src="images/myntra_logo.webp"
            alt="Myntra Home"
          />
        </Link>
      </div>
      <nav className="nav_bar">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">
          Studio <sup>New</sup>
        </a>
      </nav>
      <div className="search_bar">
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
        />
      </div>
      <div className="action_bar">
        <div className="action_container">
          <BsPersonCircle />
          <span className="action_name">Profile</span>
        </div>

        <div className="action_container">
          <FaHeart />
          <span className="action_name">Wishlist</span>
        </div>

        <Link className="action_container" to="/bag">
          <IoBagSharp />
          <span className="action_name">Bag</span>
          <span className="bag-item-count">{Bag.length}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
