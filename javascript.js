const timeNodes = Array.from (document.querySelectorAll("[data-time]"));
// const timeNodes = [...document.querySelectorAll("[data-time]")]; // or this <--

// console.log(timeNodes);

const seconds = timeNodes.map(node => node.dataset.time);