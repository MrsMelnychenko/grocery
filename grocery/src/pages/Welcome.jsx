import "./Welcome.css";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();
  const onGetStartedHanlder = () => navigate("/shopping");
  return (
    <>
      <div className="container">
        <div className="background">
          <div className="animation-container">
            <div className="ball"></div>
          </div>
          <div className="carrot"></div>
        </div>
        <div className="login"></div>
      </div>
      <div className="under-container">
        <h1 className="title">Grocery List</h1>
        <h2 className="subtitle">Unify your needs, simplify your shopping.</h2>
        <button className="btn-start" onClick={onGetStartedHanlder}>
          Get Started
        </button>
      </div>
    </>
  );
}
