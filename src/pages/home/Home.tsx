import axios from "axios";
import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useAppSelector } from "../../hooks";
import { useAppDispatch } from "../../hooks";
import { Link } from "react-router-dom";
import { saveResponse } from "../../state/actions";
import "./index.scss";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const Home: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [page, setPage] = useState<number>(2);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const reduxData = useAppSelector((state) => state);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const url = `https://api.github.com/search/repositories?q=${name}%20in:name&per_page=${page}`;
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
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleButton = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await fetchData();
    // setName("");
  };

  const handlePage = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setPage(page + 1);
    await fetchData();
  };

  const Data = () => {
    return (
      <ul>
        {reduxData.responseData.map((item: any) => {
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
            value={name}
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
          {isLoading && <h2>Loading...</h2>}
          <Button variant="contained" onClick={handlePage}>
            next page
          </Button>
          {isLoading && <h2>Loading...</h2>}
        </form>
        <nav className="data">
          <Data />
        </nav>
      </div>
    </header>
  );
};
