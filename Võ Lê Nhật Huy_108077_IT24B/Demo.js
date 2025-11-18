document.addEventListener("DOMContentLoaded", function () {

  const carousel = document.createElement("div");
  carousel.id = "carouselExample";
  carousel.className = "carousel slide";
  carousel.setAttribute("data-bs-ride", "carousel");

  const inner = document.createElement("div");
  inner.className = "carousel-inner";

  const images = [
    "https://picsum.photos/800/400?random=1",
    "https://picsum.photos/800/400?random=2",
    "https://picsum.photos/800/400?random=3"
  ];

  images.forEach((src, index) => {
    const item = document.createElement("div");
    item.className = "carousel-item" + (index === 0 ? " active" : "");

    const img = document.createElement("img");
    img.src = src;
    img.className = "d-block w-100";
    img.alt = `Slide ${index + 1}`;

    item.appendChild(img);
    inner.appendChild(item);
  });

  const prevBtn = document.createElement("button");
  prevBtn.className = "carousel-control-prev";
  prevBtn.type = "button";
  prevBtn.setAttribute("data-bs-target", "#carouselExample");
  prevBtn.setAttribute("data-bs-slide", "prev");
  prevBtn.innerHTML = `
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  `;

  const nextBtn = document.createElement("button");
  nextBtn.className = "carousel-control-next";
  nextBtn.type = "button";
  nextBtn.setAttribute("data-bs-target", "#carouselExample");
  nextBtn.setAttribute("data-bs-slide", "next");
  nextBtn.innerHTML = `
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  `;

  carousel.appendChild(inner);
  carousel.appendChild(prevBtn);
  carousel.appendChild(nextBtn);

  document.getElementById("carouselContainer").appendChild(carousel);
});