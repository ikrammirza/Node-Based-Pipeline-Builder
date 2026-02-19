import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { useStore } from '../store';

export const ImageNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const [url, setUrl] = useState(data?.url || '');

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
    updateNodeField(id, 'url', e.target.value);
  };

  return (
    <BaseNode id={id} title="Image" icon="🖼️">
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-url-input`}
        style={{ left: '-10px', background: '#6366f1' }}
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
  
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <label style={{ fontSize: '10px', color: '#94a3b8', fontWeight: '500' }}>
            IMAGE URL
          </label>
          <input 
            type="text" 
            value={url} 
            onChange={handleUrlChange}
            placeholder="https://..."
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

        <div style={{ 
          width: '100%', 
          height: '100px', 
          background: '#f1f5f9', 
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          border: '1px dashed #cbd5e1'
        }}>
          {url ? (
            <img 
              src={url} 
              alt="Preview" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=Invalid+URL'; }}
            />
          ) : (
            <span style={{ fontSize: '10px', color: '#94a3b8' }}>No Image Loaded</span>
          )}
        </div>
      </div>

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-img-output`}
        style={{ right: '-10px', background: '#6366f1',width: '8px', height: '8px' }}
      />
    </BaseNode>
  );
};