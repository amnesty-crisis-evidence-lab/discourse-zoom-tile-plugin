import ModalBodyView from 'discourse/views/modal-body';

export default ModalBodyView.extend({
  didInsertElement: function() {
  	this.cloneTiles();
  },

  cloneTiles: function() {
    var modalHtml = "";
    modalHtml += "<img src='" + $('.tile3').attr('src') + "' class='tile3 tile'/>";
    modalHtml += "<img src='" + $('.tile4').attr('src') + "' class='tile4 tile'/>";
    modalHtml += "<img src='" + $('.tile9').attr('src') + "' class='tile9 tile'/>";
    modalHtml += "<img src='" + $('.tile10').attr('src') + "' class='tile10 tile'/>";
    $('#tile-modal-2').html(modalHtml);

    //override discourse's style so we have biggest view possible
    $('#tile-modal-2').closest('.modal-body').css('max-height', 'none');
    $('#tile-modal-2').closest('.modal-inner-container').css('max-width', '90vh');

  }

});
