// import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const options = {
//     method : 'GET' , 
//     headers : {
//         'X-RadidAPI-Key': '55c2c3485fmsh6e6dc7de364f2d1p138218jsn421d56243796' ,
//         'X-RapidAPI-Host' : 'shazam.p.rapidapi.com',
//     }
// };

// fetch('https://shazam-core.p.rapidapi.com/v1/charts/world' , options)
//     .then((response) => response.json())
//     .then((response) => console.log(response))
//     .then((response) => console.error(err));

// export const shazamCoreApi = createApi({
//   reducerPath: 'shazamCoreApi' , 
//   baseQuery : fetchBaseQuery({
//     baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
//     prepareHeaders: () => {
//         headers.set('X-RadidAPI-Key' ,'55c2c3485fmsh6e6dc7de364f2d1p138218jsn421d56243796');

//         return headers;
//     },
//   }),

//   endpoints : (builder) => ({
//     getTopCharts : builder.query({ query : '/charts/world'})
// })
// });

// export const {
//     useGetTopChartsQuery,
// } = shazamCoreApi;

// // 55c2c3485fmsh6e6dc7de364f2d1p138218jsn421d56243796

// import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// const options = {
//     method: 'GET',
//     // params : {region : 'global', type: 'daily'},
//     headers: {
//       'X-RapidAPI-Key': '321bb7c862mshfdd524341eeb528p1e6201jsnaed0d1cabf40',
//       'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
//     }
//   };
  
//   fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));


//     export const shazamCoreApi = createApi({
//         reducerPath : 'shazamCoreApi',
//         baseQuery : fetchBaseQuery({
//             baseUrl: 'https://shazam-core.p.rapidapi.com/',
//             prepareHeaders: (headers) => {
//                 headers.set('X-RapidAPI-Key' ,'21bb7c862mshfdd524341eeb528p1e6201jsnaed0d1cabf40');
//                 return headers;
//             },
//         }),

//     endpoints: (builder) => ({
//         getTopCharts : builder.query({ query:() =>  'v1/charts/world'}),
//     })
//     });

//     export const {
//         useGetTopChartsQuery,
//     } = shazamCoreApi;

    // unizyme 3-4



import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '1366c740e3msh3cefb15693158ecp19a904jsne1e1d56c2195',
          'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
        }
      };
      
      fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi', 
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com',
            prepareHeaders: (headers) => {
                headers.set('X-RapidAPI-Key', '1366c740e3msh3cefb15693158ecp19a904jsne1e1d56c2195');
                return headers;
            },
        }),

        endpoints: (builder) => ({
            getTopCharts : builder.query({ query :()=> 'v1/charts/world'}),
            getSongDetails : builder.query({ query: ({songid}) =>`v1/tracks/details?track_id = ${songid}` }),
            getSongRelated : builder.query({ query : ({songid})=>`v1/tracks/related?track_id = ${songid}`}),
            getArtistDetails : builder.query({ query : (artistId) => `v2/artists/details?artist_id = ${artistId}`}),
            getSongsByCountry: builder.query({ query: (countryCode) => `v1/charts/country?country_code=${countryCode}` }),
        }),
    });


    export const {
        useGetTopChartsQuery,
        useGetSongDetailsQuery,
        useGetSongRelatedQuery,
        useGetArtistDetailsQuery,
        useGetSongsByCountryQuery,
    } = shazamCoreApi;