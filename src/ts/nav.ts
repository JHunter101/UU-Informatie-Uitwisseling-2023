// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  const header: HTMLElement | null = document.getElementById('nav-bar');

  if (header) {
    const sticky: number = header.offsetTop;

    if (window.scrollY > sticky) {
      header.classList.remove('nav-transparent');
      header.classList.add('nav-solid');
    } else {
      header.classList.add('nav-transparent');
      header.classList.remove('nav-solid');
    }
  }
};
