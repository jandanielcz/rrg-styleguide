document.addEventListener('DOMContentLoaded', () => {
    Array.from(document.querySelectorAll('pre[data-source]')).forEach((pre) => {
        let s = document.querySelector(pre.getAttribute('data-source')).innerHTML
        s = s.replaceAll(/^([\s]*)/g, '')
        pre.innerText = s
    })
})