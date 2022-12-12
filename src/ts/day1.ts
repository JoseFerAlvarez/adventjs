const gifts: string[] = ['cat', 'game', 'socks'];
const wrapped = wrapping(gifts);

console.log(wrapped);

function wrapping(gifts): string[] {
    return gifts.map((gift: string) => {
        const paper: string = "*".repeat(gift.length + 2);
        return `${paper}\\n*${gift}*\\n${paper}`;
    });
}
