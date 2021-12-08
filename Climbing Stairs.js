const minCost = (cost) => {
    for (let i = cost.length - 3; ~i; i--){
        cost[i] += Math.min(cost[i+1], cost[i+2]);
    }
    console.log(Math.min(cost[0], cost[1]));
}
//examples
minCost([0,2,2,1]);
minCost([0,2,3,2]);
minCost([10,15,20]);
minCost([0,0,0,0,0,0]);
