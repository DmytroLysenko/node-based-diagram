import { useCallback } from "react";
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  MarkerType,
  Position,
} from "reactflow";

import "reactflow/dist/style.css";

import {
  DEFAULT_EDGE_PROPERTIES,
  DEFAULT_NOTE_PROPERTIES,
  TARGET_LISTING_PROPERTIES,
  TARGET_EDGE_PROPERTIES,
} from "./constants";

import type { Connection, Node, Edge } from "reactflow";
import ListingInfo from "./Components/ListingInfo";

const initialNodes: Node[] = [
  {
    id: "1",
    position: { x: 300, y: 500 },
    data: { label: <ListingInfo id={1} /> },
    ...DEFAULT_NOTE_PROPERTIES,
    ...TARGET_LISTING_PROPERTIES,
  },
  {
    id: "2",
    position: { x: 600, y: 200 },
    data: { label: <ListingInfo id={2} /> },
    ...DEFAULT_NOTE_PROPERTIES,
    ...TARGET_LISTING_PROPERTIES,
  },
  {
    id: "3",
    position: { x: 600, y: 500 },
    data: { label: <ListingInfo id={3} /> },
    ...DEFAULT_NOTE_PROPERTIES,
  },
  {
    id: "4",
    position: { x: 900, y: 0 },
    data: { label: <ListingInfo id={4} /> },
    ...DEFAULT_NOTE_PROPERTIES,
    ...TARGET_LISTING_PROPERTIES,
  },
  {
    id: "5",
    position: { x: 900, y: 200 },
    data: { label: <ListingInfo id={5} /> },
    ...DEFAULT_NOTE_PROPERTIES,
  },
];

const initialEdges: Edge[] = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    ...DEFAULT_EDGE_PROPERTIES,
    ...TARGET_EDGE_PROPERTIES,
  },
  {
    id: "e1-3",
    source: "1",
    target: "3",
    ...DEFAULT_EDGE_PROPERTIES,
  },
  {
    id: "e2-4",
    source: "2",
    target: "4",
    ...DEFAULT_EDGE_PROPERTIES,
    ...TARGET_EDGE_PROPERTIES,
  },
  {
    id: "e2-5",
    source: "2",
    target: "5",
    ...DEFAULT_EDGE_PROPERTIES,
  },
];

const Diagram = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <ReactFlow
        fitView
        nodes={nodes}
        edges={edges}
        // onNodesChange={onNodesChange}
        // onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls showInteractive={false} />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default Diagram;
