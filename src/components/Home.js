
import { Heading } from './Heading';
import { Employee } from './Employee';
import { useEffect,useState } from "react";

export default function Home ()
{ 

   const [employee, setEmployee] = useState([]);
   useEffect(() => {
     fetch("http://localhost:3000/SeurEmployees")
       .then((response) => response.json())
       .then((data) => {
         console.log(data);
         setEmployee(data);
       });
   }, []);
    return (
        <div>
            <Heading />
        <Employee employee={ employee} />

        </div>
   ) 
}