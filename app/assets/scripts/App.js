import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";
import Modal from "./modules/Modal";

var mobileMenu = new MobileMenu();
new RevealOnScroll(".feature-item", "80%");
new RevealOnScroll(".testimonial", "70%");
new RevealOnScroll(".testimonial--last", "90%");
new StickyHeader();
new Modal();
