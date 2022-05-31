import { Alert, AlertTitle } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BasicCard } from "../../ui/card.tsx";

import "./repo.css";
export const Repo = () => {
  const params = useParams();
  const reduxData = useSelector((state) => state);
  const [repo, setRepo] = useState({ id: 0 });
  console.log(repo);
  useEffect(() => {
    reduxData.responseData.map((item) => {
      if (item.id.toString() === params.id) {
        setRepo(item);
      }
      return item;
    });
  }, [reduxData.responseData, params.id]);

  if (repo.id !== 0) {
    return (
      <div className="card-wrapper">
        <BasicCard key={repo.id} repo={repo} />
      </div>
    );
  } else {
    return (
      <div className="alert">
        <Alert style={{ width: "500px" }} severity="error">
          <AlertTitle>
            <strong>Error</strong>
          </AlertTitle>
          not found
        </Alert>
      </div>
    );
  }
};
