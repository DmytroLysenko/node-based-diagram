import { Edge, MarkerType, Node, Position } from "reactflow";

export const BASE_STROKE_WIDTH = 2;
export const BASE_COLOR = "green";
export const TARGET_LISTING_COLOR = "blue";
export const DEFAULT_NOTE_PROPERTIES: Pick<
  Node,
  "style" | "sourcePosition" | "targetPosition" | "selectable"
> = {
  sourcePosition: Position.Right,
  targetPosition: Position.Left,
  selectable: false,
  style: {
    borderWidth: BASE_STROKE_WIDTH,
    borderColor: BASE_COLOR,
  },
};

export const TARGET_LISTING_PROPERTIES: Pick<Node, "style"> = {
  style: {
    borderWidth: BASE_STROKE_WIDTH,
    borderColor: TARGET_LISTING_COLOR,
  },
};

export const DEFAULT_EDGE_PROPERTIES: Pick<
  Edge,
  "style" | "markerEnd" | "animated"
> = {
  markerEnd: {
    type: MarkerType.Arrow,
    strokeWidth: BASE_STROKE_WIDTH - 1,
    color: BASE_COLOR,
  },
  animated: false,
  style: {
    strokeWidth: BASE_STROKE_WIDTH,
    stroke: BASE_COLOR,
  },
};

export const TARGET_EDGE_PROPERTIES: Pick<
  Edge,
  "style" | "markerEnd" | "animated"
> = {
  markerEnd: {
    type: MarkerType.Arrow,
    strokeWidth: BASE_STROKE_WIDTH - 1,
    color: TARGET_LISTING_COLOR,
  },
  animated: true,
  style: {
    strokeWidth: BASE_STROKE_WIDTH,
    stroke: TARGET_LISTING_COLOR,
  },
};
