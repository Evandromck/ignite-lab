import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
     uri: import.meta.env.VITE_API_URL,
     headers:{
        'Autorization':'Bearer import.meta.env.VITE_API_URL'
     },   
     cache: new InMemoryCache()

})


// Requisição da api com o Cache em memoria