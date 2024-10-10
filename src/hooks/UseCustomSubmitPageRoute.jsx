import { useNavigate } from "react-router-dom";

function useCustomSubmitPageRoute() {
  const navigate = useNavigate();

  const handleButtonClick = (route) => {
    navigate(route);
  };

  return handleButtonClick;
}

export default useCustomSubmitPageRoute;
