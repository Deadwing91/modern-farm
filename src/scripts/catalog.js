



export const catalog = (harvestArray) => {
    let htmlString = ''
    for (const plants of harvestArray) {
        htmlString +=
        `<section class="plant">${plants.type}</section>`

    }
    return htmlString
}

