import { useState } from 'react';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ nodes, edges })
      });

      const data = await response.json();

      alert(
        `Pipeline Analysis\n\n` +
        `Nodes: ${data.num_nodes}\n` +
        `Edges: ${data.num_edges}\n` +
        `Is DAG: ${data.is_dag ? "Yes ✅" : "No ❌"}`
      );

    } catch (error) {
      console.error("Submission failed", error);
      alert("Backend error. Is FastAPI running?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '30px',
      borderTop: '1px solid #e2e8f0',
      background: '#fff' 
    }}>
      <button 
        onClick={handleSubmit}
        disabled={loading}
        style={{
          background: loading 
            ? '#94a3b8' 
            : 'linear-gradient(90deg, #4f46e5 0%, #7c3aed 100%)',
          color: 'white',
          padding: '12px 40px',
          marginBottom: '10px',
          borderRadius: '10px',
          border: 'none',
          fontSize: '15px',
          fontWeight: '600',
          cursor: loading ? 'not-allowed' : 'pointer',
          boxShadow: loading ? 'none' : '0 10px 15px -3px rgba(79, 70, 229, 0.3)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}
        onMouseEnter={(e) => {
          if (!loading) {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(79, 70, 229, 0.4)';
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = loading ? 'none' : '0 10px 15px -3px rgba(79, 70, 229, 0.3)';
        }}
      >
        {loading ? (
          <>
            <div className="spinner" /> 
            Processing...
          </>
        ) : (
          'Deploy Pipeline'
        )}
      </button>

      <style>{`
        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid #ffffff33;
          border-top: 2px solid #fff;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin { 
          0% { transform: rotate(0deg); } 
          100% { transform: rotate(360deg); } 
        }
      `}</style>
    </div>
  );
};
