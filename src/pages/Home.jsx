import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CoinCard from "../components/CoinCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // const [coins, setCoins] = useState([]);

  // const fetchCoins = async () => {
  //   const response = await fetch(
  //     "https://api.coingecko.com/api/v3/search/trending"
  //   );
  //   const data = await response.json();
  //   setCoins(data.coins);
  //   console.log(data.coins);
  // };
  // useEffect(() => {
  //   fetchCoins();
  // }, []);

  const { user } = useSelector((state) => state.auths);
  const [trendinfCoins, setTrendingCoins] = useState([]);

  const navigate = useNavigate();

  const fetchCoins = async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/search/trending"
    );
    const data = await response.json();
    //  console.log(data.coins[0].item.data.content.description);
    setTrendingCoins(data.coins);
  };

  useEffect(() => {
    fetchCoins();
    
    if(!user){
      navigate("/login")
    }
  }, [user]);

  return (
    <>
      <Typography
        variant="h4"
        id="crypto"
        sx={{ padding: "80px 0px" }}
        align="center"
        margin={10}
      >
        CRYPTO CURRENCY
      </Typography>

      <Grid container spacing={4}>
        {trendinfCoins.map((coins) => (
          <CoinCard key={coins.item.coin_id} coins={coins} />
        ))}
      </Grid>
    </>
  );
};

export default Home;
