// jquery
$(document).ready(function() {

  // make each card's nebula image a modal on click
  // use escape key or click again to remove modal and return to normal state
  $('img[data-enlargeable]').addClass('img-enlargeable').click(function () {
    let src = $(this).attr('src');
    let modal;
    
    function removeModal () {
      modal.remove ();
      $('body').off('keyup.modal-close');
    }
    // modal CSS
    modal = $('<div>').css ({
      background: 'RGBA(0,0,0,.5) url(' + src + ') no-repeat center',
      backgroundSize: 'contain',
      width: '100%',
      height: '100%',
      position: 'fixed',
      zIndex: '10000',
      top: '0',
      left: '0',
      cursor: 'zoom-out' ,
    })
    .click(function () {
      removeModal();
    })
    .appendTo('body');

    // set ESC key to close modal
    $('body').on('keyup.modal-close', function (e) {
      if (e.key === 'Escape') {
        removeModal();
      }
    })
  });
});