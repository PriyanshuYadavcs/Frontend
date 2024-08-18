import "./App.css";
import React, { useContext, useEffect, useState } from "react";
import { Appcontext } from "./Context/Appcontext";
import Header from "./Components/Header";
import Blogs from "./Components/Blogs";
import Pagination from "./Components/Pagination";

function App() {
  const {fetchBlogPosts}= useContext(Appcontext); 
  useEffect(()=> {
    fetchBlogPosts();
  }, []);


  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-x-1">
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  );
}

export default App;
