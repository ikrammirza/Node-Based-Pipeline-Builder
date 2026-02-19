import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { useStore } from '../store';

export const MathNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const [operation, setOperation] = useState(data?.operation || 'add');

  const handleSelectChange = (e) => {
    setOperation(e.target.value);
    updateNodeField(id, 'operation', e.target.value);
  };

  return (
    <BaseNode id={id} title="Math Operation" icon="🔢">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '10px' }}>
        <div style={{ position: 'relative' }}>
          <Handle type="target" position={Position.Left} id={`${id}-a`} style={{ top: 0 }} />
          <span style={{ fontSize: '10px', marginLeft: '5px' }}>Number A</span>
        </div>
        <div style={{ position: 'relative' }}>
          <Handle type="target" position={Position.Left} id={`${id}-b`} style={{ top: 0 }} />
          <span style={{ fontSize: '10px', marginLeft: '5px' }}>Number B</span>
        </div>
      </div>
      <select 
        value={operation} 
        onChange={handleSelectChange}
        style={{ width: '100%', padding: '4px', borderRadius: '4px', fontSize: '12px' }}
      >
        <option value="add">Add (+)</option>
        <option value="subtract">Subtract (-)</option>
        <option value="multiply">Multiply (×)</option>
        <option value="divide">Divide (÷)</option>
      </select>
      <Handle type="source" position={Position.Right} id={`${id}-result`} style={{ top: '50%',width: '8px', height: '8px' }} />
    </BaseNode>
  );
};