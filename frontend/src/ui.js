import { useState, useRef, useCallback } from 'react';
import ReactFlow, { Controls, Background, MiniMap, ReactFlowProvider } from 'reactflow';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';

import { InputNode } from './nodes/inputNode';
import { LLMNode } from './nodes/llmNode';
import { OutputNode } from './nodes/outputNode';
import { TextNode } from './nodes/textNode';
import { MathNode } from './nodes/MathNode';
import { ImageNode } from './nodes/ImageNode';
import { DelayNode } from './nodes/DelayNode';
import { APIRequestNode } from './nodes/APIrequestNode';
import { ConditionNode } from './nodes/ConditionNode';

import 'reactflow/dist/style.css';

const gridSize = 20;
const proOptions = { hideAttribution: true };

const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,
  mathNode: MathNode,
  imageNode: ImageNode,
  delayNode: DelayNode,
  apiRequestNode: APIRequestNode,
  conditionNode: ConditionNode,
};

const defaultEdgeOptions = {
  animated: true,
  type: 'smoothstep',
  style: {
    strokeWidth: 3,
  },
};

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

export const PipelineUI = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const {
    nodes,
    edges,
    getNodeID,
    addNode,
    onNodesChange,
    onEdgesChange,
    onConnect
  } = useStore(selector, shallow);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();

      if (event?.dataTransfer?.getData('application/reactflow')) {
        const appData = JSON.parse(event.dataTransfer.getData('application/reactflow'));
        const type = appData?.nodeType;
        if (!type) return;

        const position = reactFlowInstance.project({
          x: event.clientX - reactFlowBounds.left,
          y: event.clientY - reactFlowBounds.top,
        });

        const nodeID = getNodeID(type);
        const newNode = {
          id: nodeID,
          type,
          position,
          data: { id: nodeID, nodeType: `${type}` },
        };

        addNode(newNode);
      }
    },
    [reactFlowInstance, addNode, getNodeID]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  return (
    <div
      ref={reactFlowWrapper}
      style={{
        width: '98vw',
        height: '70vh',
        margin: '22px auto',
        borderRadius: '24px',
        overflow: 'hidden',

        background: `
          radial-gradient(circle at top left, #eef2ff, transparent 60%),
          radial-gradient(circle at bottom right, #f5f3ff, transparent 60%),
          #ffffff
        `,
        border: '2px solid #0e1eb1',
        boxShadow: `
          0 10px 30px rgba(0,0,0,0.06),
          inset 0 1px 0 rgba(255,255,255,0.6)
        `,
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onInit={setReactFlowInstance}
        nodeTypes={nodeTypes}
        proOptions={proOptions}
        snapGrid={[gridSize, gridSize]}
        defaultEdgeOptions={defaultEdgeOptions}
        connectionLineType="smoothstep"
        connectionLineStyle={{ stroke: '#8b5cf6', strokeWidth: 2 }}
        style={{ background: 'transparent' }}
      >
        <svg>
          <defs>
            <linearGradient id="edge-gradient" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>

        <Background
          variant="dots"
          gap={50}
          size={2}
          color="#320d77"
        />

        <Controls
          style={{
            display: 'flex',
            flexDirection: 'row',
            bottom: '24px',
            left: '50%',
            transform: 'translateX(-50%)',

            background: 'rgba(255,255,255,0.7)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',

            padding: '6px 10px',
            borderRadius: '16px',
            border: '1px solid rgba(0,0,0,0.06)',

            boxShadow: `
              0 10px 25px rgba(0,0,0,0.08),
              inset 0 1px 0 rgba(255,255,255,0.4)
            `,
          }}
        />

        <MiniMap
          style={{
            borderRadius: '18px',
            overflow: 'hidden',
            background: 'rgba(48, 8, 112, 0.16)',
            backdropFilter: 'blur(10px)',
            border: '2px solid rgb(58, 19, 199)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
          }}
          zoomable
          pannable
          maskColor="rgba(226, 232, 240, 0.67)"
        />
      </ReactFlow>
    </div>
  );
};
