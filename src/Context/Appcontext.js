import React from 'react'; 
import { baseUrl } from '../baseUrl';
import { createContext, useState } from 'react'; 

export const Appcontext= createContext(); 

function Appcontextprovider({children}){

    const [loading, setLoading]= useState(false); 
    const [posts, setPosts]= useState([]);
    const [page, setPage]= useState(1); 
    const [ totalPages, setTotalPages]= useState(null);
    
    
    async function fetchBlogPosts(page=1){
        setLoading(true); 
        let url = `${baseUrl}?page=${page}`;
        try{
            const result= await fetch(url); 
            const data= await result.json(); 
            setPage(data?.page);
            setPosts(data?.posts); 
            setTotalPages(data?.totalPages); 
        }
        catch(e){
            console.log("error");
            setPage(1); 
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false); 
    }

    function handlerPageChange(page){
        setPage(page); 
        fetchBlogPosts(page); 
    }


    const value= {
        posts, 
        setPosts, 
        page, 
        setPage, 
        totalPages, 
        setTotalPages, 
        loading,
        setLoading,
        handlerPageChange, 
        fetchBlogPosts
    }
    return <Appcontext.Provider value={value}>
        {children}
    </Appcontext.Provider>

}

export default Appcontextprovider; 