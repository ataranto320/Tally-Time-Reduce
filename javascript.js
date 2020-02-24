const timeNodes = Array.from (document.querySelectorAll("[data-time]"));
// const timeNodes = [...document.querySelectorAll("[data-time]")]; // or this <--

// console.log(timeNodes);

const seconds = timeNodes.map(node => node.dataset.time).map(timeCode => {
    const [mins, secs] = timeCode.split(":").map(parseFloat);
    return (mins * 60) + secs;
    console.log(mins, secs);
})
.reduce((total, vidSeconds) => total + vidSeconds)
// or
// .reduce((total, vidSeconds) => {
//     return total + vidSeconds
// })