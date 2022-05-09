import { useNavigate } from 'react-router-dom';

const useUnauthorizedHandler = () => {
  const navigate = useNavigate();

  const handleUnauthorized = (err) => {
    if (err.response.data.error === 'Unauthorized') {
      navigate('/public/login');
    }
  };

  return {
    handleUnauthorized,
  };
};

export default useUnauthorizedHandler;
