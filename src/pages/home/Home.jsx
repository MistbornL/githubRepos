import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { saveResponse } from "../../state/actions";
import "./index.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const Home = () => {
  const [name, setName] = useState("");
  const [showComponent, setShowComponent] = useState(false);
  const dispatch = useDispatch();
  const reduxData = useSelector((state) => state);
  const url = `https://api.github.com/search/repositories?q=${name}%20in:name&per_page=5`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        // handle success
        dispatch(saveResponse(response.data.items));
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, [url, dispatch]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleButton = (e) => {
    e.preventDefault();
    setShowComponent(!showComponent);
  };

  const Data = () => {
    return (
      <ul>
        {reduxData.responseData.map((item) => {
          return (
            <Link to={`/repo-detail/${item.id}`}>
              <li key={item.id}>{item.full_name}</li>
            </Link>
          );
        })}
      </ul>
    );
  };
  return (
    <div className="search-wrap">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TextField
          id="standard-basic"
          label="Standard"
          variant="standard"
          onChange={handleChange}
          placeholder="Search..."
          type="text"
        />
        <Button variant="contained" onClick={handleButton}>
          Search
        </Button>
      </div>
      <nav className="data">{showComponent ? <Data /> : null}</nav>
    </div>
  );
};
