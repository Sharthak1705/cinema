import React from 'react'
import "./style.scss";
import { useParams } from "react-router-dom"

import useFetch from "../../hooks/useFetch.jsx"
import DetailsBanner from './detailsBanner/DetailsBanner.jsx';
import Cast from './cast/Cast.jsx';
import VideoSection from './videoSection/VideoSection.jsx';
import Similar from "./carousels/Similar.jsx"
import Reccomendation from './carousels/Reccomendation.jsx';


const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
      `/${mediaType}/${id}/credits`
  )

  return (
    <div>
     <DetailsBanner  video={data?.results?.[0]} crew={credits?.crew}/> 
     <Cast data={credits?.cast} loading={creditsLoading}/>
     <VideoSection data={data} loading={loading}/>
     <Similar mediaType={mediaType} id={id}/>
     <Reccomendation mediaType={mediaType} id={id}/>
    </div>
  );
};

export default Details;
