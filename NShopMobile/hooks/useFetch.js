import { View, Text } from 'react-native'
import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // suppose we have a token
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uSWQiOiI1NzNiYWU0YS1iOWMyLTQ1ZmItYjc0OS0zZWFhYTdlNTNlYjgiLCJzdGF0dXMiOiJBY3RpdmUiLCJlbWFpbCI6Imsxc2Vpbmx1dkBnbWFpbC5jb20iLCJuYmYiOjE3MzA5ODE5MjYsImV4cCI6MTczMzU3MzkyNiwiaWF0IjoxNzMwOTgxOTI2LCJpc3MiOiIxYmVhNTJkYy00YmE1LTRhY2UtODIyYS0wZDA2MDlhOWIwYzgifQ.ol8swtTJu8ng68G-l0sdXltPr79j2XD-rn1RAJAP_Tc';

    const fetchData = async () => {
        setIsLoading(true);

        // this field is for fetching data from the deployed API
        // try {
        //     const response = await axios.get('https://mynshop.nicewave-381a57d9.japaneast.azurecontainerapps.io/api/v1/products?Categories=9d3735b1-f818-44aa-af2b-c9e4c5dcb549&Page=0&PageSize=10', {
        //         headers: {
        //             Authorization: `Bearer ${token}`
        //         }});
        //     setData(response.data);
        //     console.log("data: ", response.data);
            
        //     setIsLoading(false);
        // } catch (error) {
        //     setError(error);
        // } finally {
        //     setIsLoading(false);
        // }

        // this field is for fetching data from the local API
        try {
            const response = await axios.get('http://10.0.2.2:3000/api/products', {
                headers: {
                    'content-type': 'application/json',
                }});
            setData(response.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    };

    return { data, isLoading, error, refetch }
}

export default useFetch