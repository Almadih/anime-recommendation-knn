const KNN = (data,query,k)=>{
    neighborDistances = []
    data.map((d,i)=>{

        let distance = euclideanDistance(d.slice(2),query)
        neighborDistances.push([distance,i])
    })



    
    sortedNeighborDistances = neighborDistances.sort()
    
    
    nearestNeighbors = sortedNeighborDistances.slice(0,k)
    
    nearestNeighborsLabels = []
    nearestNeighbors.map((n,i)=>{

        let d = data[nearestNeighbors[i][1]]
        nearestNeighborsLabels.push(d[0])
    })
    

    return nearestNeighborsLabels



}

const euclideanDistance = (point1,point2)=>{
    squaredDistanceSum = 0
    for(i=0;i<point1.length;i++){
        squaredDistanceSum += Math.pow(point1[i]-point2[i],2)
    }
    return Math.sqrt(squaredDistanceSum)
}


module.exports = KNN