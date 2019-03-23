import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";

var mobileMenu = new MobileMenu();
new RevealOnScroll(".feature-item", "80%");
new RevealOnScroll(".testimonial", "70%");
new RevealOnScroll(".testimonial--last", "90%");
new StickyHeader();
