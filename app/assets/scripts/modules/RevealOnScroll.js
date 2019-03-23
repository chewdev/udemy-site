import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class RevealOnScroll {
  constructor(elementsSelector, offset) {
    this.itemsToReveal = $(elementsSelector);
    this.offset = offset || "100%";
    this.hideInitially();
    this.createWaypoints();
  }

  hideInitially() {
    this.itemsToReveal.addClass("reveal-item");
  }

  createWaypoints() {
    var offset = this.offset;
    this.itemsToReveal.each(function() {
      var currEl = this;
      new Waypoint({
        element: currEl,
        handler: function() {
          $(currEl).addClass("reveal-item--show");
        },
        offset: offset
      });
    });
  }
}

export default RevealOnScroll;
