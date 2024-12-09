import hamburguerMenu from './hamburger_menu.js';
import loader from './loader.js';
import regresiveCount from './regresive_count.js';
import stickyMenu from './scroll_header.js';
import textEffect from './text_effect.js';
import scrollTopButton from './scroll_top_btn.js';
import testimonialSlider from './testimonials_slider.js';
import contactForm from './validation_form.js';
const d = document;
const w = window;

d.addEventListener('DOMContentLoaded', (e) => {
  //Funcion para el menu hamburguesa
  hamburguerMenu('.menu-btn', '.menu-list', '.menu-list a');

  //Funcion efecto de texto
  textEffect();

  //Funcion que lanza la animacion de carga
  loader();

  //Funcion para la cuenta regresiva
  regresiveCount();

  //Boton de scroll
  scrollTopButton('.scroll-top-btn');

  // Contact form
  contactForm();

  //Slider de Testimonios
  testimonialSlider();
});

w.addEventListener('scroll', (e) => {
  //Funcion efecto en el menu al hacer scroll
  stickyMenu();
});
