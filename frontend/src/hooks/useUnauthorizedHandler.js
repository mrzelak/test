import { useNavigate } from 'react-router-dom';
import UserManager from 'managers/UserManager';

const useUnauthorizedHandler = () => {
  const navigate = useNavigate();

  const handleUnauthorized = (err) => {
    if (err.response.data.error === 'Unauthorized') {
      UserManager.clear();
      navigate('/public/login');
    }
  };

  return {
    handleUnauthorized,
  };
};

export default useUnauthorizedHandler;
