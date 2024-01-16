import { useEffect, useState } from "react";
import Graph from "./Graph";


const GraphPage =()=>{
	const [data, setData] = useState({});
  const [isDownloading, setIsDownloading] =useState(false);

	useEffect(()=> {
    setIsDownloading(true);
		fetch('http://localhost:8080/mind-map')
		.then((res) => res.json())
		.then((obj) => {
			console.log(obj);
			setData(obj);
      setIsDownloading(false);
		})
    .catch(err =>{
      console.log(err);
    })
	}, [])

    const nodes= data.nodes?.map((node)=>(
      {id: node.id.toString(), position: {x: node.coordinate.x, y: node.coordinate.y,}, data: { label: node.term }}
    ));

    const edges=data.links?.map(
      connect=>({
          id: `${connect.source}-${connect.target}`,
          source: connect.source.toString(),
          target: connect.target.toString() ,
          label: connect.relation,
          type: 'step'
      }))


    return (
      <div>Граф
        {isDownloading ?
          <span>Загрузка</span>
          : 
          <Graph initialNodes={nodes} initialEdges={edges}/>
        }
      </div>
    );
  }
  
export default GraphPage;