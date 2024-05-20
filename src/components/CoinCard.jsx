import { ExpandMore } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
    Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CoinCard = ({ coins }) => {

    // console.log(coins.item.data.price);
  return (
    <>
      <Grid item xs={12} md={8} lg={4}>
        <Card>
          <CardMedia
            component="img"
            height="300"
            image={coins.item.large}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2">Coin_Name : {coins?.item.name}</Typography>
            <Typography variant="body2"> Price : {coins?.item.data.price}</Typography>
            <Typography variant="body2"> Market_Capital : {coins?.item.data.market_cap}</Typography>
          </CardContent>
            
          

          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          <Link to={`/coin/${coins.item.name}`}>
          <Button variant="contained outlined" >
            Learn More...
          </Button>
          </Link>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default CoinCard;
