class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 9 + 0.3
            }s`);
      });
    }
  
    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks(); 
      }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
      this.navList.addEventListener("click", (event) => {
        if (event.target.tagName === "A") {
          this.navList.classList.remove(this.activeClass);
          this.mobileMenu.classList.remove(this.activeClass);
          this.animateLinks();
        }
      });
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
      }
    }
  
  const mobileNavbar = new MobileNavbar(
    ".menu-hamburguer-open",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();