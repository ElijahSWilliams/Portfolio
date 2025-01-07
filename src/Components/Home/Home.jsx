import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const nav = useNavigate();

  const openAbout = () => {
    nav("/about");
  };

  return (
    <div className="home">
      <h1 className="home__title">Hi, I'm Elijah Williams. </h1>
      <p className="home__description"> Full-Stack Software Engineer</p>
      <button className="home__button" type="button" onClick={openAbout}>
        Get To Know Me
      </button>
    </div>
  );
}

export default Home;
