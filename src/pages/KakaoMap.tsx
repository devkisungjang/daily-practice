// 스타일
import "../styles/KakaoMap.scss";

// 훅
import React, { useEffect, useState } from "react";
import axios from "axios";

// 리액트 쿼리
import { useQuery } from "react-query";

// 카카오 지도
import { Map, MarkerClusterer, MapMarker } from "react-kakao-maps-sdk";

// 아이콘
import { FaLessThan, FaSearchLocation } from "react-icons/fa";

const KakaoMap = () => {
  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();
  const [searchInputValue, setSearchInputValue] = useState("");
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(`${keyword}`, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds();
        let markers = [];

        for (var i = 0; i < data.length; i++) {
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          });
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(markers);

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
    });
  }, [map, keyword]);

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") setKeyword(searchInputValue);
  };

  return (
    <div className="map-container">
      <Map // 로드뷰를 표시할 Container
        center={{
          lat: 37.566826,
          lng: 126.9786567,
        }}
        className="map"
        // style={{
        //   width: "100%",
        //   height: "350px",
        // }}
        level={3}
        onCreate={setMap}
      >
        {markers.map((marker: any) => (
          <MapMarker
            key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
            position={marker.position}
            onClick={() => setInfo(marker)}
          >
            {info && info.content === marker.content && (
              <div style={{ color: "#000" }}>{marker.content}</div>
            )}
          </MapMarker>
        ))}
      </Map>
      <div className="aside-container">
        <div className="info-wrapper">
          <input
            onChange={(e) => setSearchInputValue(e.target.value)}
            onKeyUp={(e) => handleKeyPress(e)}
            value={searchInputValue}
          />
          <button onClick={() => setKeyword(searchInputValue)}>검색</button>
        </div>
      </div>
    </div>
  );
};

export default KakaoMap;
