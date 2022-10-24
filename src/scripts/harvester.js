



export const harvestPlants = (plantArray) => {
    let harvestedPlants = []

    for (const seeds of plantArray) {
        if (seeds.type === "Corn") {
            for (let value = 0; value < seeds.output / 2; value++)
                harvestedPlants.push(seeds)
        } else {
            for (let value2 = 0; value2 < seeds.output; value2++) {
                harvestedPlants.push(seeds)
            }

        }
    }
    return harvestedPlants
}















