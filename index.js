function knightMoves(start, end) {
    const moves = [
        {x: 2, y: 1}, {x: 2, y: -1},
        {x: 1, y: 2}, {x: 1, y: -2},
        {x: -2, y: -1}, {x: -2, y: 1},
        {x: -1, y: -2}, {x: -1, y: 2}
    ];
  
    const queue = [[start, [start]]];
    const visited = new Set();
  
    while (queue.length > 0) {
        const [current, path] = queue.shift();
        const [x, y] = current;
  
        if (x === end[0] && y === end[1]) {
            console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
            
            for (let i = 1; i < path.length; i++) {
                const position = path[i];
                console.log(`[${position[0]}, ${position[1]}]`);
            }
            return;
        }
  
        visited.add(current);
  
        for (const move of moves) {
            const newX = x + move.x;
            const newY = y + move.y;
  
            if (newX >= 0 && newY >= 0 && newX < 8 && newY < 8 && !visited.has([newX, newY])) {
                queue.push([[newX, newY], [...path, [newX, newY]]]);
            }
        }
    }
  
    console.log("No path found");
}
  
knightMoves([3, 3], [4, 3]);