import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
  return (
    <div style={{ 
      padding: '16px', 
      background: '#ffffff', 
      borderBottom: '1px solid #e4e2f0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0)'
    }}>
      <h3 style={{ 
        margin: '0 0 16px 0', 
        fontSize: '21px', 
        color: '#6366f1', 
        textTransform: 'uppercase', 
        letterSpacing: '1px',
        fontWeight: '700'
      }}>
        Nodes Library
      </h3>
      
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '12px', 
        justifyContent: 'center',
        maxWidth: '1200px',
      }}>
        <DraggableNode type="customInput" label="Input" icon="📥" />
        <DraggableNode type="llm" label="LLM" icon="🤖" />
        <DraggableNode type="customOutput" label="Output" icon="📤" />
        <DraggableNode type="text" label="Text" icon="✍️" />
        <DraggableNode type="mathNode" label="Math" icon="🔢" />
        <DraggableNode type="imageNode" label="Image" icon="🖼️" />
        <DraggableNode type="delayNode" label="Delay" icon="⏱️" />
        <DraggableNode type="apiRequestNode" label="API" icon="🌐" />
        <DraggableNode type="conditionNode" label="Logic" icon="⚖️" />
      </div>
    </div>
  );
};