
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const useAuthStatus = () => {
  const { user } = useSelector((state) => state.auth);
  const [loggedin, setLoggedin] = useState(false);
  const [checkStatus, setCheckStatus] = useState(true);

  useEffect(() => {
    if (user) {
      setLoggedin(true);
    } else {
      setLoggedin(false);
    }

    setCheckStatus(false);
  }, [user]);

  return {
    loggedin,
    checkStatus,
  };
};

export default useAuthStatus;
