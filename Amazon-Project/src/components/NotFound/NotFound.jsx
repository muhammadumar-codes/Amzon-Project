import "./NotFound.css";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

export default function NotFound() {
  const navigate = useNavigate();

  const handleNotFound = () => {
    navigate("/");
  };

  return (
    <div className="notfound-container">
      <div className="notfound-box">
        <h1 className="notfound-code">404</h1>
        <h2 className="notfound-title">Page Not Found</h2>
        <p className="notfound-message">
          Sorry, the page you’re looking for doesn’t exist, has been moved, or is temporarily unavailable.
        </p>
        <Button className="back-home-btn" onClick={handleNotFound}>
          Back to Home
        </Button>
      </div>
    </div>
  );
}
