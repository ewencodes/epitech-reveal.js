import './assets/style/epitech.scss'
import epitechLogo from "./assets/images/epitech-logo.png"

let config = {}

function init(initConfig) {
    config = initConfig

    return {
        id: 'orange',
        init: (deck) => {
            const image = document.createElement("img")
            image.src = epitechLogo;
            image.classList = ["logo"]

            if(config.author){
                const span = document.createElement("span")
                span.textContent = `${config.author}`
                span.classList = ["author"]

                deck.getRevealElement().appendChild(span)
            }
    
            deck.getRevealElement().appendChild(image)
        }
    }
}

export default init