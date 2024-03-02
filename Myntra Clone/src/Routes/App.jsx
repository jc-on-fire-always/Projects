import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import "./../index.css";
import FetchItems from "../Components/FetchItems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../Components/loadingSpinner";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header />
      <FetchItems />

      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}

      <Footer />
    </>
  );
}

export default App;
