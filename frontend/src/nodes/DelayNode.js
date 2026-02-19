import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { useStore } from '../store';

export const DelayNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  
 
  const [delay, setDelay] = useState(data?.delay || 1000);

  const handleDelayChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setDelay(value);
    updateNodeField(id, 'delay', value);
  };

  return (
    <BaseNode id={id} title="Delay" icon="⏱️">
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-start`}
        style={{ left: '-10px', background: '#94a3b8' }}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <label style={{ fontSize: '10px', color: '#94a3b8', fontWeight: '500' }}>
            WAIT DURATION (MS)
          </label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input 
              type="number" 
              value={delay} 
              onChange={handleDelayChange}
              min="0"
              step="100"
              style={{
                flex: 1,
                padding: '6px',
                fontSize: '12px',
                borderRadius: '4px',
                border: '1px solid #e2e8f0',
                background: '#f8fafc',
                outline: 'none'
              }}
            />
            <span style={{ fontSize: '11px', color: '#64748b' }}>ms</span>
          </div>
        </div>

        <p style={{ 
          fontSize: '10px', 
          color: '#94a3b8', 
          margin: '0', 
          fontStyle: 'italic' 
        }}>
          Pauses execution before passing data to the next node.
        </p>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-done`}
        style={{ right: '-10px', background: '#6366f1', width: '8px', height: '8px' }}
      />
    </BaseNode>
  );
};