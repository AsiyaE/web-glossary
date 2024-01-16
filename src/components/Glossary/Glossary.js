import { useEffect, useState } from "react";
import Card from "./Card";


const Glossary =()=>{
	const [items, setItems] = useState({});

	useEffect(()=> {
		fetch('http://localhost:8080/glossary')
		.then((res) => res.json())
		.then((arr) => {
			console.log(arr);
			setItems(arr);
		})
    .catch(err =>{
      console.log(err);
    });

	}, [])


    return (
      <div>Глоссарий
        <div  className='glossary-wrapper'>
          {Object.entries(items).map((item)=>
            <Card key={item[0]} term={item[0]} definition={item[1]}/>
          )}
        </div>
      </div>
    );
  }
  
export default Glossary;