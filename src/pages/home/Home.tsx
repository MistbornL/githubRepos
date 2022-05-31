import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useAppSelector } from "../../hooks.tsx";
import { useAppDispatch } from "../../hooks.tsx";
import { Link } from "react-router-dom";
import { saveResponse } from "../../state/actions.tsx";
import "./index.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const Home: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [showComponent, setShowComponent] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const reduxData = useAppSelector((state) => state);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowComponent(!showComponent);
  };

  const Data = () => {
    return (
      <ul>
        {reduxData.responseData.map((item) => {
          return (
            <Link key={item.id} to={`/repo-detail/${item.id}`}>
              <li>{item.full_name}</li>
            </Link>
          );
        })}
      </ul>
    );
  };
  return (
    <header>
      <div className="search-wrap">
        <form style={{ display: "flex", justifyContent: "center" }}>
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
        </form>
        <nav className="data">{showComponent ? <Data /> : null}</nav>
      </div>
    </header>
  );
};
