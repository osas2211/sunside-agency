const m_nav = document.querySelector(".mobile-nav");
const m_nav_menu = document.querySelector(".mobile-nav-menu");

m_nav.addEventListener("click", (e)=>{
    if (m_nav_menu.classList.contains("hide")){
        m_nav_menu.className = "mobile-nav-menu show";
    }
    else{
        m_nav_menu.className = "mobile-nav-menu hide";
    }
})