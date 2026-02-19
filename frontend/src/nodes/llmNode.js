import { Handle, Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode id={id} title="LLM" icon="🤖">
    
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', margin: '10px 0' }}>
        
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <Handle
            type="target"
            position={Position.Left}
            id={`${id}-system`}
            style={{ left: '-22px', background: '#6366f1', width: '8px', height: '8px' }}
          />
          <span style={{ fontSize: '11px', color: '#475569' }}>System</span>
        </div>

        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <Handle
            type="target"
            position={Position.Left}
            id={`${id}-prompt`}
            style={{ left: '-22px', background: '#6366f1', width: '8px', height: '8px' }}
          />
          <span style={{ fontSize: '11px', color: '#475569' }}>Prompt</span>
        </div>
        
      </div>

      <div style={{ 
        marginTop: '10px', 
        padding: '8px', 
        background: '#f1f5f9', 
        borderRadius: '4px',
        fontSize: '12px',
        color: '#64748b',
        textAlign: 'center'
      }}>
        Large Language Model
      </div>

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
        style={{ right: '-10px', background: '#6366f1', width: '8px', height: '8px', border: '2px solid white' }}
      />
    </BaseNode>
  );
}