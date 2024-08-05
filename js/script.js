window.addEventListener("load", function () {
    AOS.init();
    // gotop바로가기 기능
    const gotop = this.document.querySelector(".gotop");
    //   위로 가기 기능
    gotop.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
    //   waypoint.js적용
    const waypoint_service = new Waypoint({
      element: document.querySelector(".service"),
      handler: function (direction) {
        console.log(direction);
        if (direction === "down") {
          gotop.classList.add("active");
        } else {
          gotop.classList.remove("active");
        }
      },
      offset: "50%",
    })
    const waypoint_footer = new Waypoint({
      element: document.querySelector(".footer"),
      handler: function (direction) {
        console.log(direction);
        if (direction === "down") {
          gotop.classList.add("active-footer");
        } else {
          gotop.classList.remove("active-footer");
        }
      },
      offset: "95%",
    });
   
  });
  