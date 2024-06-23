import React from "react"

import Carousel from "../../../components/carousel/Carausel.jsx";
import useFetch from "../../../hooks/useFetch.jsx"

const Reccomendation= ({ mediaType,id }) => {
    const { data,loading,error } = useFetch(`/${mediaType}/${id}/recommendations`
    );

     return (
        <Carousel
            title="Recomendations"
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
     );
};
export default Reccomendation;