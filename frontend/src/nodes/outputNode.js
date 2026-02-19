import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { useStore } from '../store';

export const OutputNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data?.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
    updateNodeField(id, 'outputName', e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
    updateNodeField(id, 'outputType', e.target.value);
  };

  return (
    <BaseNode id={id} title="Output" icon="📤">
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-value`}
        style={{ background: '#6366f1', width: '8px', height: '8px' }}
      />
      <Handle
              type="source"
              position={Position.Right}
              id={`${id}-response`}
              style={{ right: '-10px', background: '#6366f1', width: '8px', height: '8px', border: '2px solid white' }}
            />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <label style={{ fontSize: '10px', color: '#94a3b8', fontWeight: '500' }}>
            NAME
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
            TYPE
          </label>
          <select 
            value={outputType} 
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
            <option value="Image">Image</option>
          </select>
        </div>
      </div>
    </BaseNode>
  );
}