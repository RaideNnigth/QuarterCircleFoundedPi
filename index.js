const game = new main()
window.onload = () => {
    document.querySelector("#start-button").addEventListener("click", () => {
        game.getPointsPosition()
    })
}