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
  useEffect(() => {
    reduxData.responseData.map((item) => {
      if (item.id.toString() === params.id) {
        setRepo(item);
      }
      return item;
    });
  }, [reduxData.responseData, params.id]);

  return (
    <div className="card-wrapper">
      <BasicCard key={repo.id} repo={repo}></BasicCard>
    </div>
  );
};
