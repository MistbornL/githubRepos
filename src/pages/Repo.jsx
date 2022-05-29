import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const Repo = () => {
  const params = useParams();
  const reduxData = useSelector((state) => state);
  const [repo, setRepo] = useState({ id: 0 });
  useEffect(() => {
    reduxData.responseData.map((item) => {
      if (item.id == params.id) {
        setRepo(item);
        console.log(true);
      } else {
        console.log("no");
      }
    });

    console.log(repo);
  }, [reduxData.responseData, params.id]);

  return (
    <div>
      <p>{repo.name}</p>
    </div>
  );
};
