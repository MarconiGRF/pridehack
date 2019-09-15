const links = {
    inscricao: "http://gatsbyJS.org",
    edital: "http://google.com"
}

export function getLink(link) {
    return links[link];
}

export function open(link) {
    return window.open(link, "_blank");
} 

export function open2() {
    return window.open("https://google.com", "_blank");
} 