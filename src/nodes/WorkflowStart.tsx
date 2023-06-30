import React from "react";
import { Handle, Position } from "reactflow";
import IconBox from "./IconBox.tsx";
import { PlayIcon } from "./icons";

export interface Data {
    label: string
}

export interface Props {
    data: Data
}

const WorkflowStart: React.FC<Props> = ({data}) => {
    return (
        <>
            <IconBox color="green.500" label={data.label}>
                <PlayIcon color="white" />
            </IconBox>
            <Handle type="source" position={Position.Bottom} id="a" />
        </>
    );
}

export default WorkflowStart;