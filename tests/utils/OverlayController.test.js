import OverlayController from '../../utils/OverlayController';

describe('OverlayController', () => {
  const elements = {};

  beforeAll(() => {
    elements.overlay = document.createElement('div');
    elements.overlay.className = 'overlay';
  });

  afterEach(() => {
    elements.overlay.className = 'overlay';
  });

  describe('#show', () => {
    it('should change className to \'overlay overlay-show\'', () => {
      const { overlay } = elements;
      OverlayController.show(overlay);
      expect(overlay.className).toBe('overlay overlay-show');
    });

    it('should do nothing if element does not have \'overlay\' as className', () => {
      const { overlay } = elements;
      const className = '';
      overlay.className = className;
      OverlayController.show(overlay);
      expect(overlay.className).toBe(className);
    });
  });

  describe('#hide', () => {
    it('should change className to \'overlay overlay-hide\'', () => {
      const { overlay } = elements;
      OverlayController.hide(overlay);
      expect(overlay.className).toBe('overlay overlay-hide');
    });

    it('should do nothing if element does not have \'overlay\' as className', () => {
      const { overlay } = elements;
      const className = '';
      overlay.className = className;
      OverlayController.hide(overlay);
      expect(overlay.className).toBe(className);
    });
  });
});
