import { Heading } from "./Heading";
import { Employee } from "./Employee";
import { useEffect, useState } from "react";
import AddEmployee from "./AddEmployee";

export default function Home() {
  const [ employee, setEmployee ] = useState( [] );
  function Add(newForm)
  {
    setEmployee( [...employee, newForm] );

}
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
      <Employee employee={employee} />
      {/* {FormData} */}
    </div>
  );
}
