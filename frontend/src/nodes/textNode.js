import { useEffect, useMemo, useRef, useState } from "react";
import { Handle, Position } from "reactflow";
import { BaseNode } from "./BaseNode";
import { useStore } from "../store";

export const TextNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const [text, setText] = useState(data?.text || "");
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }
  }, [text]);

  const variables = useMemo(() => {
    const regex = /{{\s*([a-zA-Z0-9_]+)\s*}}/g;
    const found = new Set();
    let match;
    while ((match = regex.exec(text)) !== null) {
      found.add(match[1]);
    }
    return Array.from(found);
  }, [text]);

  return (
    <BaseNode id={id} title="Text" icon="✍️" outputs={[{ id: `${id}-output` }]}>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-value`}
        style={{ background: '#6366f1', width: '8px', height: '8px' }}
      />
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label style={{ fontSize: '10px', color: '#94a3b8' }}>Text Content</label>
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            updateNodeField(id, "text", e.target.value);
          }}
          style={{
            width: "100%", 
            resize: "none", 
            overflow: "hidden",
            background: "#f8fafc", 
            border: "1px solid #e2e8f0",
            borderRadius: "6px", 
            padding: "8px", 
            
            paddingRight: "10px", 
            fontSize: "12px", 
            outline: "none",
            boxSizing: "border-box" 
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '4px' }}>
          {variables.map((variable) => (
            <div key={variable} style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <Handle
                type="target"
                position={Position.Left}
                id={`${id}-${variable}`}
                style={{
                  left: '-14px', 
                  background: '#6366f1',
                  width: '8px',
                  height: '8px',
                  border: '2px solid white'
                }}
              />
              <span style={{ fontSize: '11px', color: '#6366f1', fontWeight: '600', marginLeft: '4px' }}>
                {variable}
              </span>
            </div>
          ))}
        </div>
      </div>
    </BaseNode>
  );
};