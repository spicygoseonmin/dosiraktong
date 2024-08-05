window.addEventListener("load", function () {
  // 비주얼슬라이드 페이지 네이션
  // 1. 슬라이드(.swiper-slide) 개수 만큼 li 를 생성하기
  const swSlideCount = this.document.querySelectorAll(".sw-visual .swiper-slide").length;
  //   console.log(swSlideCount);
  // // 2. li 태그 출력 장소(UL 태그) 저장
  const swSlidepgUl = this.document.querySelector(".sw-visual-pg-list");
  // 3.li에 html로 작성할 글자를 생성한다.
  let swVisualHtml = "";
  const swSlides = Array.from({ length: swSlideCount });
  swSlides.forEach(function (item, index) {
    // console.log(item);
    swVisualHtml += `<li>${index + 1}</li> `;
  });
  //   4.html로 만든 li 를 ul 추가
  swSlidepgUl.innerHTML = swVisualHtml;
  // 5. 페이지네이션
  const swVisualPgli = this.document.querySelectorAll(".sw-visual-pg-list > li");
  const swiper = new Swiper(".sw-visual", {
    effect: "fade",
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 1500,
      // 사용자가 마우스 클릭 드래그로 이동하면
      // 아래 구문이 없으면 autoplya 가 해제되므로
      // 이것을 방지해 주기위한 처리
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".sw-visual-next",
      prevEl: ".sw-visual-prev",
    },
  });

  swVisualPgli[0].classList.add("active");
  swiper.on("slideChange", function () {
    swVisualPgli.forEach(function (item, index) {
     
      if (swiper.realIndex === index) {
        item.classList.add("active");
      } else {
        // 다른 순서는 모션을 제거하라.
        item.classList.remove("active");
      }
    });
  });
});
