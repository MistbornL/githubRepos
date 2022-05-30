import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard({ repo }) {
  const routeChange = () => {
    let path = `${repo.owner.html_url}`;
    window.location.href = path;
  };
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Github Repositorie
        </Typography>
        <Typography variant="h5" component="div">
          {repo.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          language: {repo.language}
        </Typography>
        <Typography variant="body2">
          Watchers: {repo.watchers}
          <br />
          {`Default Branch: ${repo.default_branch}`}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Link to={{ pathname: repo.owner.html_url }} target="_blank"> */}
        <Button onClick={routeChange} size="small">
          Learn More
        </Button>
        {/* </Link> */}
      </CardActions>
    </Card>
  );
}
