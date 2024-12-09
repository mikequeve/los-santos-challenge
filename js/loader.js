export default function loader() {
  window.addEventListener("load", function () {
    document.querySelector("body").classList.add("loaded");
  });
}
