const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', () => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', () => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;
