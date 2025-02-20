  // Menu responsive
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("mobile-menu").classList.toggle("hidden");
});

document.addEventListener("DOMContentLoaded", function () {
  // Carousel de Artículos
  const carouselArticles = document.getElementById("carousel-articles");
  const slidesArticles = document.querySelectorAll(".article-slide");
  const slideCountArticles = slidesArticles.length;
  if (slideCountArticles === 0) return;

  let currentIndexArticles = 0;
  const intervalTimeArticles = 7200; // Intervalo de 6.5 segundos

  function updateCarouselArticles() {
    const slideWidth = slidesArticles[0].getBoundingClientRect().width;
    carouselArticles.style.transition = "transform 1.5s ease-in-out";
    carouselArticles.style.transform = `translateX(${
      -currentIndexArticles * slideWidth
    }px)`;
  }

  function nextSlideArticle() {
    currentIndexArticles = (currentIndexArticles + 1) % slideCountArticles;
    updateCarouselArticles();
  }

  function prevSlideArticle() {
    currentIndexArticles =
      (currentIndexArticles - 1 + slideCountArticles) % slideCountArticles;
    updateCarouselArticles();
  }

  document
    .getElementById("next-article")
    ?.addEventListener("click", nextSlideArticle);
  document
    .getElementById("prev-article")
    ?.addEventListener("click", prevSlideArticle);

  setInterval(nextSlideArticle, intervalTimeArticles);

  // Carousel de Autores
  const carouselAut = document.getElementById("carousel");
  const slideCountAut = carouselAut?.children.length || 0;
  if (slideCountAut === 0) return;

  let currentIndexAut = 0;
  const intervalTimeAut = 4500; // Intervalo de 4.5 segundos

  function updateCarouselAut() {
    carouselAut.style.transition = "transform 1.5s ease-in-out";
    carouselAut.style.transform = `translateX(-${currentIndexAut * 100}%)`;
  }

  function nextSlideAut() {
    currentIndexAut = (currentIndexAut + 1) % slideCountAut;
    updateCarouselAut();
  }

  setInterval(nextSlideAut, intervalTimeAut);
});
