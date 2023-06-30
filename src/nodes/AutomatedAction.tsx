import React from "react";
import { Handle, Position } from "reactflow";
import IconBox from "./IconBox.tsx";
import { BoltIcon } from "./icons";

export interface Data {
    label: string
}

export interface Props {
    data: Data
}

const AutomatedAction: React.FC<Props> = ({data}) => {
    return (
        <>
            <Handle type="target" position={Position.Top} id="a" />
            <IconBox color="blue.700" label={data.label}>
                <BoltIcon color="white" />
            </IconBox>
            <Handle type="source" position={Position.Bottom} />
        </>
    );
}

export default AutomatedAction;