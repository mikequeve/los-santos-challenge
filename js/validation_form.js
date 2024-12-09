const d = document;

export default function contactForm() {
  const $form = d.querySelector('.contact-form'),
    $loader = d.querySelector('.contact-form-loader'),
    $response = d.querySelector('.response');

  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    $loader.style.display = 'block';
    fetch('https://formsubmit.co/ajax/michaelvega46@gmail.com', {
      method: 'POST',
      body: new FormData(e.target),
    })
      .then((response) => (response.ok ? response.json : Promise.reject(response)))
      .then((json) => {
        $response.classList.remove('none');
        $form.reset();
      })
      .catch((error) => {
        console.log(error);
        let message =
          error.statusText || 'Error al enviar el formulario, intenta nuevamente...';
        $response.querySelector('h3').innerHTML = `Error ${error.status}: ${message}`;
        $response.classList.remove('none');
      })
      .finally(() => {
        $loader.style.display = 'none';
        setTimeout(() => {
          $response.classList.add('none');
        }, 3000);
      });
  });
}
