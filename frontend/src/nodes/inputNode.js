import { Handle, Position } from 'reactflow';
import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { useStore } from '../store';

export const InputNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);

  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data?.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
    updateNodeField(id, 'inputName', e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
    updateNodeField(id, 'inputType', e.target.value);
  };

  return (
    <BaseNode 
      id={id} 
      title="Input" 
      icon="📥"
      outputs={[{ id: `${id}-value` }]}
    >
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <label style={{ fontSize: '10px', color: '#94a3b8', fontWeight: '500' }}>
            FIELD NAME
          </label>
          <input 
            type="text" 
            value={currName} 
            onChange={handleNameChange}
            style={{
              padding: '6px',
              fontSize: '12px',
              borderRadius: '4px',
              border: '1px solid #e2e8f0',
              outline: 'none',
              background: '#f8fafc'
            }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <label style={{ fontSize: '10px', color: '#94a3b8', fontWeight: '500' }}>
            DATA TYPE
          </label>
          <select 
            value={inputType} 
            onChange={handleTypeChange}
            style={{
              padding: '6px',
              fontSize: '12px',
              borderRadius: '4px',
              border: '1px solid #e2e8f0',
              background: '#f8fafc',
              cursor: 'pointer'
            }}
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </div>
      </div>
      <Handle
        type="source"
        position={Position.Left}
        id={`${id}-response`}
        style={{ left: '-10px', background: '#6366f1', width: '8px', height: '8px', border: '2px solid white' }}
      />
    </BaseNode>
  );
};