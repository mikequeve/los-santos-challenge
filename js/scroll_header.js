const d = document,
w = window;

export default function stickyMenu(){
    const $header = d.querySelector("header");
    $header.classList.toggle("sticky", w.scrollY > 100);

}