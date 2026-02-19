import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { useStore } from '../store';

export const APIRequestNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const [method, setMethod] = useState(data?.method || 'GET');
  const [url, setUrl] = useState(data?.url || '');

  const handleMethodChange = (e) => {
    setMethod(e.target.value);
    updateNodeField(id, 'method', e.target.value);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
    updateNodeField(id, 'url', e.target.value);
  };

  return (
    <BaseNode id={id} title="API Request" icon="🌐">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '5px' }}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <Handle
              type="target"
              position={Position.Left}
              id={`${id}-trigger`}
              style={{ left: '-22px', background: '#94a3b8' }}
            />
            <span style={{ fontSize: '10px', color: '#6366f1', fontWeight: 'bold' }}>TRIGGER</span>
          </div>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <Handle
              type="target"
              position={Position.Left}
              id={`${id}-body`}
              style={{ left: '-22px', background: '#7c3aed' }}
            />
            <span style={{ fontSize: '10px', color: '#6366f1', fontWeight: 'bold' }}>DATA/BODY</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <label style={{ fontSize: '10px', color: '#94a3b8', fontWeight: '500' }}>METHOD</label>
          <select 
            value={method} 
            onChange={handleMethodChange}
            style={{
              padding: '6px',
              fontSize: '12px',
              borderRadius: '4px',
              border: '1px solid #e2e8f0',
              background: '#f8fafc',
              fontWeight: '600',
              color: method === 'GET' ? '#6366f1' : '#3b82f6'
            }}
          >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <label style={{ fontSize: '10px', color: '#94a3b8', fontWeight: '500' }}>ENDPOINT URL</label>
          <input 
            type="text" 
            value={url} 
            onChange={handleUrlChange}
            placeholder="https://api.example.com/v1"
            style={{
              padding: '6px',
              fontSize: '11px',
              borderRadius: '4px',
              border: '1px solid #e2e8f0',
              background: '#f8fafc',
              outline: 'none'
            }}
          />
        </div>
      </div>

      <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '5px' }}>
        <span style={{ fontSize: '10px', color: '#6366f1', fontWeight: 'bold' }}>RESPONSE</span>
        <Handle
          type="source"
          position={Position.Right}
          id={`${id}-response`}
          style={{ right: '-22px', background: '#6366f1', width: '10px', height: '10px' }}
        />
      </div>
    </BaseNode>
  );
};