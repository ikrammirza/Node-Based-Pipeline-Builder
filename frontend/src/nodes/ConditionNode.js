import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { useStore } from '../store';

export const ConditionNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  
  const [operator, setOperator] = useState(data?.operator || '==');
  const [value, setValue] = useState(data?.value || '');

  const handleOperatorChange = (e) => {
    setOperator(e.target.value);
    updateNodeField(id, 'operator', e.target.value);
  };

  const handleValueChange = (e) => {
    setValue(e.target.value);
    updateNodeField(id, 'value', e.target.value);
  };

  return (
    <BaseNode id={id} title="Condition" icon="⚖️">
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-input`}
        style={{ left: '-10px', background: '#94a3b8', width: '8px', height: '8px' }}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <label style={{ fontSize: '10px', color: '#94a3b8', fontWeight: '500' }}>IF INPUT IS</label>
          <select 
            value={operator} 
            onChange={handleOperatorChange}
            style={{
              padding: '6px',
              fontSize: '12px',
              borderRadius: '4px',
              border: '1px solid #e2e8f0',
              background: '#f8fafc',
              cursor: 'pointer'
            }}
          >
            <option value="==">Equals</option>
            <option value="!=">Does Not Equal</option>
            <option value="contains">Contains</option>
            <option value=">">Greater Than</option>
            <option value="<">Less Than</option>
          </select>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <label style={{ fontSize: '10px', color: '#94a3b8', fontWeight: '500' }}>VALUE</label>
          <input 
            type="text" 
            value={value} 
            onChange={handleValueChange}
            placeholder="Comparison value..."
            style={{
              padding: '6px',
              fontSize: '12px',
              borderRadius: '4px',
              border: '1px solid #e2e8f0',
              background: '#f8fafc',
              outline: 'none'
            }}
          />
        </div>

        <div style={{ marginTop: '5px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '5px' }}>
            <span style={{ fontSize: '10px', color: '#6366f1', fontWeight: 'bold' }}>TRUE</span>
            <Handle
              type="source"
              position={Position.Right}
              id={`${id}-true`}
              style={{ right: '-22px', background: '#6366f1', width: '8px', height: '8px',}}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '5px' }}>
            <span style={{ fontSize: '10px', color: '#6366f1', fontWeight: 'bold' }}>FALSE</span>
            <Handle
              type="source"
              position={Position.Right}
              id={`${id}-false`}
              style={{ right: '-22px', background: '#6366f1', width: '8px', height: '8px',}}
            />
          </div>
        </div>
      </div>
    </BaseNode>
  );
};