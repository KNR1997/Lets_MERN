import { Link } from "react-router-dom";

const Button = () => {
  return (
    <Link to="/sign-in">
      <button className="bg-blue-500 text-white  px-6 py-2 rounded-full">
        Sign In
      </button>
    </Link>
  );
};

export default Button;
