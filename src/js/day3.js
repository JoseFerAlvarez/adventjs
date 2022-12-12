const packOfGifts = ["book", "doll", "ball", "cat"]
const reindeers = ["dasher", "dancer"]

console.log(distributeGifts(packOfGifts, reindeers));

function distributeGifts(packOfGifts, reindeers) {
    const giftsWeight = packOfGifts.reduce((sum, current) => sum + current.length, 0);
    const reindeersCapacity = reindeers.reduce((sum, current) => sum + (current.length * 2), 0);

    return Math.floor(reindeersCapacity / giftsWeight);
}
