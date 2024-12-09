export default function textEffect() {
  let $title = document.querySelector(".title");

  const titleEffect = () => {
    setTimeout(() => {
      $title.classList.toggle("title-effect");
    }, 1500);
  };

  titleEffect();
}
