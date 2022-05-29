import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./index.css";

export const Home = () => {
  const [response, setResponse] = useState([]);
  const [name, setName] = useState("");
  const [showComponent, setShowComponent] = useState(false);

  const url = `https://api.github.com/search/repositories?q=${name}%20in:name&per_page=5`;
  const handleChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        // handle success
        setResponse(response.data.items);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, [url]);

  const handleButton = (e) => {
    e.preventDefault();
    setShowComponent(!showComponent);
    setName("");
  };

  const Data = () => {
    return (
      <ul>
        {response.map((item) => {
          return (
            <Link to={`/repo-detail/${item.id}`}>
              <li key={item.id}>{item.full_name}</li>;
            </Link>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="search-wrap">
      <div>
        <input onChange={handleChange} placeholder="Search..." type="text" />
        <button onClick={handleButton}>Search</button>
      </div>

      <nav className="data">{showComponent ? <Data /> : null}</nav>
    </div>
  );
};
