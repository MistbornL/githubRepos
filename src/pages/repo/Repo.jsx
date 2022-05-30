import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BasicCard from "../../ui/card";
import "./repo.css";
export const Repo = () => {
  const params = useParams();
  const reduxData = useSelector((state) => state);
  const [repo, setRepo] = useState({ id: 0 });
  useEffect(() => {
    reduxData.responseData.map((item) => {
      if (item.id == params.id) {
        setRepo(item);
      }
      return item;
    });

    console.log(repo);
  }, [reduxData.responseData, params.id]);

  return (
    <div className="card-wrapper">
      <BasicCard repo={repo}></BasicCard>
    </div>
  );
};
