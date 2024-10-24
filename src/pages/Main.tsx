import { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import useStore from "../zustand/animal";
import { getDog, getCat } from "../api/animalApi";

const Main = () => {
  const { data, refetch } = useQuery("강지이름", getDog, {
    enabled: false,
  });
  // console.log(data);

  const onClickFetchDataHandler = () => {
    refetch();
  };

  //
  const { count, increment, decrement } = useStore();

  return (
    <div className="main">
      <button onClick={onClickFetchDataHandler}>fetch버튼</button>
      <div>
        {data &&
          data.map((value: any, index: any) => (
            <ul key={index}>
              <li>이름 : {value.name}</li>
              <li>나이 : {value.age}</li>
              <li>성별 : {value.gender}</li>
            </ul>
          ))}
      </div>
      <div>
        <h1>count : {count}</h1>
        <button onClick={increment}> + </button>
        <button onClick={decrement}> - </button>
      </div>
    </div>
  );
};

export default Main;
