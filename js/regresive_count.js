const d = document;

export default function regresiveCount() {
  const $days = d.getElementById('days'),
    $hours = d.getElementById('hours'),
    $minutes = d.getElementById('minutes'),
    $seconds = d.getElementById('seconds');

  //fecha a futuro para el conteo
  const countdownDate = new Date('December 22, 2026 08:00:00').getTime(); //getTime() para obtener el tiempo en milisegundos hasta la fecha programada.

  setInterval(function () {
    //obtener fecha actual y milisegundos
    const now = new Date().getTime();

    //obtener las distancias entre ambas fechas
    //se restan la fecha a futuro menos la fecha actual
    let distance = countdownDate - now;

    //calculo de dias - horas - minutos - segundos
    let days = Math.floor(distance / (1000 * 60 * 60 * 24)); //Math.Floor = redondea la cantidad

    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //escribir los resultados
    $days.innerHTML = days;
    $hours.innerHTML = hours;
    $minutes.innerHTML = minutes;
    $seconds.innerHTML = ('0' + seconds).slice(-2);
  }, 1000);
}
