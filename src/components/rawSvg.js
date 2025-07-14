// export function runOutputSvg() {
//     // const imageURL = image.url
//     // const svgCode = imageURL.text();
//     // return <div dangerouslySetInnerHTML={{ __html: svgCode }} />;
//     console.log('hello')
//     const svgHolders = [...document.querySelectorAll('.js-svg-logo')];
//     console.log(svgHolders);
//     svgHolders.forEach(svgHolder => {
//         const url = svgHolder.innerHTML;
//         console.log(url)
//         if (url) {
//             fetch(url)
//                 .then(res => res.text())
//                 .then(res => {
//                     // const holder = document.createElement('div')
//                     svgHolder.innerHTML = res
//                     imageHolder.remove()
//                     // console.log(holder.querySelector('path'))
//                 })
//         }
//
//     })
// }


export function runOutputSvg() {
    const logoContainers = [...document.querySelectorAll('.js-logo-container')];
    logoContainers.forEach(logoContainer => {
        const svgHolder = logoContainer.querySelector('.js-svg-logo')
        if (svgHolder) {
            const imageHolder = logoContainer.querySelector('.js-image-logo')
            const url = svgHolder.innerHTML;
            if (url) {
                fetch(url)
                    .then(res => res.text())
                    .then(res => {
            svgHolder.innerHTML = res
            imageHolder.remove()
            })
            }
        }
    })
}