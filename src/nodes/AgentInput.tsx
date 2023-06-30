import React from "react";
import { Handle, Position } from "reactflow";
import IconBox from "./IconBox.tsx";
import { PersonIcon } from "./icons";

export interface Data {
    label: string,
    options: Option[]
}

export interface Option {
    id: string,
    label: string
}

export interface Props {
    data: Data,
}

const AgentInput: React.FC<Props> = ({data}) => {
    return (
        <>
            <Handle type="target" position={Position.Top} id="a" />
            <IconBox color="blue.500" label={data.label}>
                <PersonIcon color="white" />
            </IconBox>
            {data.options.map(opt => (
                <Handle key={opt.id} type="source" position={Position.Bottom} id={opt.id} />
            ))}
        </>
    );
}

export default AgentInput;