//console.log("Welcome to the main module")
import { createPlan } from './plan.js'
import { createAsparagus } from './seeds/asparagus.js'
import { createPotato } from './seeds/potato.js'
import { createCorn } from './seeds/corn.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'
import { addPlant, usePlants } from './field.js'
import { plantSeeds } from './tractor.js'
import { harvestPlants } from './harvester.js'
import { catalog } from './catalog.js'






const yearlyPlan = createPlan()
console.log(yearlyPlan)



let asparagusSeed = createAsparagus()
addPlant(asparagusSeed)

let potatoSeed = createPotato()
addPlant(potatoSeed)

let cornSeed = createCorn()
addPlant(cornSeed)

let soybeanSeed = createSoybean()
addPlant(soybeanSeed)

let sunflowerSeed = createSunflower()
addPlant(sunflowerSeed)

let wheatSeed = createWheat()
addPlant(wheatSeed)

let seeds = plantSeeds(yearlyPlan)
let plantsArray = usePlants()
//console.log(plantsArray)

let use = harvestPlants(plantsArray)
//console.log(use)



const parentHTMLElement = document.querySelector(".container")
parentHTMLElement.innerHTML = catalog(use)














//console.log(plant)