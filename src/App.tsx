import React, { useState } from "react";
import Workflow from "./Flow.tsx";

function App(): React.JSX.Element {
    const [workflowId, _] = useState(1);

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <Workflow
                workflowId={workflowId}
                initialNode={
                    { id: "1", position: { x: 0, y: 0 }, data: { label: "Step One" }}
                }
            />
        </div>
    );
}

export default App;
