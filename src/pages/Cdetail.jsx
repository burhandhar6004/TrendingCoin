import { Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

const Cdetail = () => {
  const params = useParams();

//   const data = fetchCoins();

//     console.log(data);

  return (
    <Typography
      variant="h4"
      id="crypto"
      sx={{ padding: "80px 0px" }}
      align="center"
      margin={10}
    >
      {params.name}
    </Typography>
  );
};

export default Cdetail;
