import React, {useCallback, useEffect, useMemo } from "react";
import ReactFlow, {
    addEdge,
    Background,
    BackgroundVariant,
    Controls,
    Edge,
    MiniMap,
    Node,
    useEdgesState,
    useNodesState
} from "reactflow";
import 'reactflow/dist/style.css';
import { getWorkflowId } from "./data";
import { Connection } from "@reactflow/core/dist/esm/types";
import { WorkflowStart, AgentInput, AutomatedAction } from "./nodes";

export interface Props {
    workflowId: Number
    initialNode: Node
}

const Workflow: React.FC<Props> = ({workflowId, initialNode}) => {
    const [nodes, setNodes, onNodesChange] = useNodesState([initialNode]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    const nodeTypes = useMemo(() => (
        {
            workflowStart: WorkflowStart,
            agentInput: AgentInput,
            automatedAction: AutomatedAction,
        }
    ), []);

    useEffect(() => {
        getWorkflowId(workflowId)
            .then(({nodes, edges}) => {
                setNodes(nodes);
                setEdges(edges);
            })
            .catch(e => console.error(e))
    }, [setEdges, setNodes, workflowId]);

    const onConnect = useCallback((params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            onConnect={onConnect}
            onEdgesChange={onEdgesChange}
            onNodesChange={onNodesChange}
            fitView
        >
            <Controls />
            <MiniMap />
            <Background
                variant={BackgroundVariant.Dots}
                gap={12}
                size={1}
            />
        </ReactFlow>
    );
}

export default Workflow;