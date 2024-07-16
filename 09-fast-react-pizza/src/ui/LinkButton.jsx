/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to }) {
  const className = "hover:text-color-400 text-blue-600";
  const navigate = useNavigate();
  if (to === "-1")
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;
