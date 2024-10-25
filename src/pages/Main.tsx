import "../styles/Main.scss";
import { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import useStore from "../zustand/animal";
import { getDog, postDog } from "../api/animalApi";

const Main = () => {
  // zustand 스토어
  const {
    // 카운터 기능
    count,
    increment,
    decrement,
    // 동물 이름, 나이, 성별
    newName,
    setNewName,
    newAge,
    setNewAge,
    newGen,
    setNewGen,
  }: any = useStore();

  // react-query 테스트
  // get 요청
  useState;
  const { data, refetch } = useQuery("get", getDog, {
    enabled: false,
  });
  // console.log(data);

  const getDataHandler = () => {
    refetch();
  };
  // ------------------------------------------------------------------------
  const onChangeName = (e: any) => {
    setNewName(e.target.value);
  };

  const onChangeAge = (e: any) => {
    setNewAge(e.target.value);
  };

  const onChangeGen = (e: any) => {
    setNewGen(e.target.value);
  };

  // post 요청
  const newDog = {
    name: newName,
    age: newAge,
    gender: newGen,
  };

  const postNewDogHandler = () => {
    postDog(newDog);
  };

  return (
    <div className="main">
      <div>
        <h2 style={{ color: "blue" }}>get 요청</h2>
        <button onClick={getDataHandler}>get 요청</button>
        <div>
          <h2>데이터 리스트</h2>

          {data &&
            data.map((v: any, i: any) => (
              <div>
                <ul key={i}>
                  <li>이름 : {v.name}</li>
                  <li>나이 : {v.age}</li>
                  <li>성별 : {v.gender}</li>
                </ul>
                <button>delete 요청</button>
              </div>
            ))}
        </div>
      </div>
      <div className="from-wrapper " style={{ color: "blue" }}>
        <h2>post 요청</h2>
        <input
          type="text"
          value={newName}
          onChange={onChangeName}
          placeholder="이름"
        />
        <input
          type="text"
          value={newAge}
          onChange={onChangeAge}
          placeholder="나이"
        />
        <input
          type="text"
          value={newGen}
          onChange={onChangeGen}
          placeholder="여자, 남자만"
        />
        <button onClick={postNewDogHandler}>post 요청</button>
      </div>
      <div>
        <h2 style={{ color: "blue" }}>zustand 카운터 예제</h2>
        <h3>count : {count}</h3>
        <button onClick={increment}> + </button>
        <button onClick={decrement}> - </button>
      </div>
    </div>
  );
};

export default Main;
