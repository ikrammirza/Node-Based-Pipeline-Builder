import { Handle, Position, useReactFlow } from 'reactflow';

export const BaseNode = ({ id, title, children, icon, inputs = [], outputs = [] }) => {
  const { deleteElements } = useReactFlow();

  const onDelete = () => {
    deleteElements({ nodes: [{ id }] });
  };

  return (
    <div style={{
      width: 200,
      height: 'auto',
      border: '3px solid #6366f1',
      borderRadius: '10px',
      background: '#fff',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative' 
    }}>
  
      <div style={{ 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 10px', 
        background: '#f8fafc',
        borderBottom: '3px solid #6366f1',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontSize: '14px' }}>{icon || '📄'}</span>
          <span style={{ 
            fontSize: '11px', 
            fontWeight: '700', 
            color: '#475569',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            {title}
          </span>
        </div>
        
        <button 
          onClick={onDelete}
          style={{
            background: 'none', border: 'none', color: '#94a3b8',
            cursor: 'pointer', fontSize: '14px', padding: '0 4px'
          }}
        >
          ×
        </button>
      </div>

      <div style={{ padding: '12px' }}>
        {children}
      </div>

      {inputs.map((input, index) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={input.id}
          style={{ 
            top: `${(index + 1) * 33}%`,
            background: '#6366f1', 
            width: '8px', 
            height: '8px',
            border: '2px solid white',
            left: '-5px', 
            ...input.style 
          }}
        />
      ))}

      {outputs.map((output, index) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={output.id}
          style={{ 
            top: `${(index + 1) * 33}%`, 
            background: '#6366f1', 
            width: '8px', 
            height: '8px',
            border: '2px solid white',
            right: '-5px',
            ...output.style 
          }}
        />
      ))}
    </div>
  );
};