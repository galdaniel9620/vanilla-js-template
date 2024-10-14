import Hero from './Hero'; 
import About from './About';
import Presentation from './Presentation';
import Whyus from './Whyus';

export default function Home () {
    return `
    ${Hero()}
    ${About()}
    ${Presentation()}
    ${Whyus()}
    `
}