import axios from "axios";

export type ParamsApi = {
    query: string,
    page: string,
    num_pages: string
}

export const fetchDataApi = (value: ParamsApi) => {
    const options = {
        params: {
            ...value
        },
        headers: {
            'X-RapidAPI-Key': 'c65aac7595msh96e2f02efa3738bp1ea311jsn5f360b98f4b5',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };

    const url = 'https://jsearch.p.rapidapi.com/search';

    return axios.get(url,options)
        .then(response => response.data.data)
        .catch(err => console.log(err));
}