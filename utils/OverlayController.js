class OverlayController {
  static show(element) {
    const classNames = element.className.split(' ');

    if (classNames.indexOf('overlay') === -1) {
      return;
    }

    element.className = 'overlay overlay-show';
  }

  static hide(element) {
    const classNames = element.className.split(' ');

    if (classNames.indexOf('overlay') === -1) {
      return;
    }

    element.className = 'overlay overlay-hide';
  }
}

export default OverlayController;
