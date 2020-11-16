(function (window, document) {

  var layout = document.getElementById('layout');
  var menu = document.getElementById('menu');
  var menuLink = document.getElementById('menuLink');

  /**
   * 
   * @param {Element} element 
   * @param {string} className 
   */
  function toggleClass(element, className) {
    element.classList.toggle(className);
  }

  /**
   * Handle toggle all
   * @param {Event} e 
   */
  function toggleAll(e) {
    var active = 'active';

    e.preventDefault();
    e.stopPropagation();
    toggleClass(layout, active);
    toggleClass(menu, active);
    toggleClass(menuLink, active);
  }

  /**
   * Handle click document
   * @param {Event} e 
   */
  function handleEvent(e) {
    if (menu.classList.contains('active')) {
      return toggleAll(e);
    }
  }

  // Menu click
  menuLink.addEventListener('click', toggleAll);

  // Click document
  document.addEventListener('click', handleEvent);

}(this, this.document));
