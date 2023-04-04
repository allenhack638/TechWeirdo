import Node from "./treeModel.js"
const bfs_search = async (req, res) => {

    //node will passed through query parameter
    const start_node = +req.query.node;

    const root_node = await Node.findOne({ root: start_node });

    if (!root_node) {
        res.status(404).send(`No node found with root: ${start_node}`);
        return;
    }

    const queue = [];
    const ans = [];
    queue.push(root_node);

    const vis = new Set();

    while (queue.length > 0) {

        const frontVal = queue.shift();

        // BFS is ...
        ans.push(frontVal.val);

        vis.add(frontVal.node);

        if (frontVal.left && !vis.has(frontVal.left)) {
            const left_child = await Node.findOne({ node_num: frontVal.left });
            if (left_child) queue.push(left_child);
        }

        if (frontVal.right && !vis.has(frontVal.right)) {
            const right_child = await Node.findOne({ node_num: frontVal.right });
            if (right_child) queue.push(right_child);
        }
    }
    res.send(ans);
}
export default bfs_search;