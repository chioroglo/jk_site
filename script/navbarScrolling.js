'use strict';


const scrollToTopOfBlock = (div) => {
    return div.scrollIntoView({block:"start",behavior:"smooth"});
}