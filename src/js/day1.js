const gifts = ['cat', 'game', 'socks']

console.log(wrapping(gifts));

function wrapping(gifts) {
    return gifts.map((gift) => {
        const part = "*".repeat(gift.length + 2);
        return part.concat("\\n*", gift).concat("*\\n", part);
    });
}
