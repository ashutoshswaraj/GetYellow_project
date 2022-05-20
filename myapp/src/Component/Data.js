import axios from "axios";
import { useEffect, useState } from "react";
export const Data = (props) => {
const [data,setData] = useState([])
  useEffect(() => {
    const data = axios.get("http://localhost:3000/Maps").then((res) => {
      res.data.forEach((e) => 
      
      props.datahandle(e)
      );
    });
  }, []);

  return(
      <>
      </>
  )
};
