import "isomorphic-fetch"

import graph001 from "./graph001.json";
import { Edge, Node } from "reactflow";

export interface Workflow {
    nodes: Node[]
    edges: Edge[]
}

export async function getWorkflowId(id: Number): Promise<Workflow>
{
    return new Promise((resolve, reject) => {
        switch (id) {
            case 1: resolve(graph001); break;
            default: reject(new Error('Graph not found')); break;
        }
    });
}

export async function saveWorkflow(id: Number, workflow: Workflow): Promise<void>
{
    return new Promise((resolve) => {
        console.log(`Saving workflow #${id}`);
        console.debug(workflow);
        resolve()
    });
}