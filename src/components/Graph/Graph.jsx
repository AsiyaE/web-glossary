import React from 'react';
import ReactFlow, {
  Background,
  Controls,
} from 'reactflow';
 
import 'reactflow/dist/style.css';

const Graph =({initialNodes, initialEdges})=>{
    console.log(initialEdges, initialNodes)
  return (
    <div style={{ width: '90vw', height: '90vh' }}>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        
        fitView
      >
        <Controls />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}

export default Graph;