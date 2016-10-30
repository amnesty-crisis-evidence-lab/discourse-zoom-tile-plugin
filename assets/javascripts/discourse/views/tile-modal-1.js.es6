import ModalBodyView from 'discourse/views/modal-body';

export default ModalBodyView.extend({
  title: function () {
    return "Zoom in";//I18n.t("canned_replies.insert.modal_title");
  }.property(),

  didInsertElement: function() {
  	this.cloneTiles();
  },

  cloneTiles: function() {
    var modalHtml = "";
    modalHtml += "<img src='" + $('.tile1').attr('src') + "' class='tile1 tile'/>";
    modalHtml += "<img src='" + $('.tile2').attr('src') + "' class='tile2 tile'/>";
    modalHtml += "<img src='" + $('.tile7').attr('src') + "' class='tile7 tile'/>";
    modalHtml += "<img src='" + $('.tile8').attr('src') + "' class='tile8 tile'/>";
    $('#tile-modal-1').html(modalHtml);

    //override discourse's style so we have biggest view possible
    $('#tile-modal-1').closest('.modal-body').css('max-height', 'none');
    $('#tile-modal-1').closest('.modal-inner-container').css('max-width', '90vh');
  }

});
