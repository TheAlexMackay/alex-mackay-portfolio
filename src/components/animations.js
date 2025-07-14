import { animate } from 'animejs';
import { createTimeline } from 'animejs';

export function runConsoleLog() {
    // Wrap every letter in a span
    const textWrapper = document.querySelector('.animated-into-text .letters');
    let textLength = 0
    if (textWrapper) {
        const textLength = textWrapper.innerText.length
        console.log("text length is " + textLength)
        const textDuration = (((textLength + 1) / 2) * 100)
        console.log("text duration is " + textDuration)
        const textDurationShort = textDuration - 20
        const fadeOut = textDuration + 1000
        textWrapper.innerHTML = textWrapper.textContent.replace(/./g, "<span class='letter' style='opacity: 0'>$&</span>");
        const tl = createTimeline({ defaults: {loop: false}})
            tl.label('start')
        .add('.animated-into-text .line', { scaleY: [0,1], opacity: [0.5,1], easing: "easeOutExpo", duration: 700 }, 'start')
        .add('.animated-into-text .line', { translateX: [0, document.querySelector('.animated-into-text .letters').getBoundingClientRect().width + 10],
            easing: "easeOutExpo", duration: textDurationShort, }, 1000)
        // .add('.animated-into-text .letter', { opacity: [0,1], easing: "easeOutExpo", duration: 600, offset: '-=775'}, (el, i) => 34 * (i+1))
        .add('.animated-into-text .letter', { opacity: [0,1], easing: "easeOutExpo", duration: textDuration, delay: (el, i) => 34 * (i+1)}, '1000')
        .add('.animated-into-text .line', {  opacity: 0, duration: 1000, easing: "easeOutExpo"},  fadeOut)
    }

    const textWrapper2 = document.querySelector('.animated-into-text-2 .letters');
    if (textWrapper2) {
        const textLength2 = textWrapper2.innerText.length
        const textDuration2 = (((textLength2 + 1) / 2) * 100)
        const textDurationShort2 = textDuration2 - 20
        const fadeOut = textDuration2 + 1000
        textWrapper2.innerHTML = textWrapper2.textContent.replace(/./g, "<span class='letter' style='opacity: 0'>$&</span>");
        const tl = createTimeline({ defaults: {loop: false}})
        tl.label('start')
            .add('.animated-into-text-2 .line', { scaleY: [0,1], opacity: [0.5,1], easing: "easeOutExpo", duration: 700 }, '1000')
            .add('.animated-into-text-2 .line', { translateX: [0, document.querySelector('.animated-into-text-2 .letters').getBoundingClientRect().width + 10],
                easing: "easeOutExpo", duration: textDurationShort2, }, 2000)
            // .add('.animated-into-text .letter', { opacity: [0,1], easing: "easeOutExpo", duration: 600, offset: '-=775'}, (el, i) => 34 * (i+1))
            .add('.animated-into-text-2 .letter', { opacity: [0,1], easing: "easeOutExpo", duration: textDuration2, delay: (el, i) => 34 * (i+1)}, '2000')
            .add('.animated-into-text-2 .line', {  opacity: 0, duration: fadeOut, easing: "easeOutExpo"},  2600)
    }

}
