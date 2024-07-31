window.addEventListener("load",function(){
    // 헤더를 스크롤 할때 헤더 변경 기능
    // (화면을 스크롤 할때 상단의 헤더가 화면을따라 이동함)
    const header = this.document.querySelector(".header");
    let scy = 0;
    const mbt = this.document.querySelector(".mbt");

    // console.log(scy);
    this.window.addEventListener("scroll", function(){
        scy = window.document.documentElement.scrollTop;
        if(scy > 0){
            header.classList.add("active");
        }
        else{
            header.classList.remove("active");
        }
    });
    // 모바일바 기능
    const navMb = this.document.querySelector(".nav-mb");
    const htmlRoot = this.document.querySelector("html");
    mbt.addEventListener("click", function(){
        // 현재 ani 클래스의 유무 파악
        const state = this.classList.contains("ani");
    if(!state){
        this.classList.add("ani")
        navMb.classList.add("active")
        htmlRoot.classList.add("active");
    }
    else{
        this.classList.remove("ani")
        navMb.classList.remove("active")
        htmlRoot.classList.remove("active");
    }
    });

    // 반응형일때
    this.window.addEventListener("resize", function(){
        let windowW = this.document.innerWidth;
        if(windowW > 1024){
            mbt.classList.remove("ani");
            navMb.classList.remove("active");
            htmlRoot.classList.remove("active");
            if (scy > 0) {
                header.classList.add("active");
            } else {
                header.classList.remove("active");
            }
        };
    });
});
