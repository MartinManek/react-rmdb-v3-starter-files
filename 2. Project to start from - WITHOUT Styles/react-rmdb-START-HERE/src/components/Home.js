import React, { useEffect, useState } from 'react';


//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config';

//Components
import HeroImage from './HeroImage';

// Hook
import { useHomeFetch } from './Hooks/useHomeFetch';

// Image
import NoImage from '../images/no_image.jpg'

const Home = () => {
    const { state, loading, error} = useHomeFetch()

    console.log(state);

    return (
        <>
        {state.results[0] ? (
        <HeroImage 
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.result[0].backdrop_path}`}
            title={state.results[0].original_title}
            text={state.results[0].oveview}
        /> ) : null};
        </>
    );
};

export default Home;
