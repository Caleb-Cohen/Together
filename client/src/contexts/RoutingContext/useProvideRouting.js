import { useState } from "react";

const useProvideRouting = () => {
  const [currentPage, setCurrentPage] = useState('landingPage');

  return {
    currentPage,
    setCurrentPage
  } 
}

export default useProvideRouting;