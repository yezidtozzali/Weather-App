const skeleton = () => {
const container = document.querySelector(".container");
    const showSkeleton = () => {
        container.innerHTML= "";

        const cellOne = document.createElement("div");
        cellOne.classList.add("skeleton")
        cellOne.classList.add("skeleton-today")
        const cellTwo = document.createElement("div");
        cellTwo.classList.add("skeleton");
        cellTwo.classList.add("skeleton-info");
        const cellThree = document.createElement("div");
        cellThree.classList.add("skeleton");
        cellThree.classList.add("skeleton-nextdays");

        container.appendChild(cellOne);
        container.appendChild(cellTwo);
        container.appendChild(cellThree);

    }

    const hideSkeleton = () => {
       const skeletonCells = document.querySelectorAll(".skeleton");

       skeletonCells.forEach(cell => cell.remove());
    }

    return {showSkeleton, hideSkeleton};
}

export default skeleton;