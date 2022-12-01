
export class GraphNode {
  val: number
  neighbors: GraphNode[]
  constructor(val?: number, neighbors?: GraphNode[]) {
    this.val = (val === undefined ? 0 : val)
    this.neighbors = (neighbors === undefined ? [] : neighbors)
  }
}

export function cloneGraph(node: GraphNode | null): GraphNode | null {
  let visited: Map<GraphNode, GraphNode> = new Map<GraphNode, GraphNode>();
  let copy = (function dfs(node: GraphNode | null): GraphNode | null  {
    if (!node) return null;
    if (visited.has(node))
      return visited.get(node)? visited.get(node) : null;;
    let currentNode = new GraphNode(node.val);
    visited.set(node, currentNode);
    for (const neighbor of node.neighbors) {
      if (neighbor) {
        const neighbourNode = dfs(neighbor);
        console.log(neighbourNode)
        if (neighbourNode)
          currentNode.neighbors.push(neighbourNode);
      }
    }
    return currentNode;
  })(node);
  console.log(JSON.stringify(node) === JSON.stringify(copy));
  console.log(JSON.stringify(copy));
  return copy;
};
