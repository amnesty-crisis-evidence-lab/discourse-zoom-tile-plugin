import { withPluginApi } from 'discourse/lib/plugin-api';
import showModal from 'discourse/lib/show-modal';

function initializeModal(api) {
	api.decorateCooked($elem => {
		// Enable zoom on mobile device only.
		// Discourse add class = 'mobile-device' to <html> on mobile device
		if (!$('html').hasClass('mobile-device')) {
			return;
		}

		//add zoomin icon
		//use css in discourse admin to put this icon on tile images
		$elem.find('.tile1').parent().append('<i class="fa fa-search-plus" id="zoom-in-icon" aria-hidden="true"></i>');
	    for (var i = 1; i <= 12; i++) {
	    	if (i == 1 || i == 2 || i == 7 || i == 8) {
		        $elem.find('.tile' + i).click(function(){
		            showModal('tile-modal-1');
		        });	    		
	    	}
	    	if (i == 3 || i == 4 || i == 9 || i == 10) {
		        $elem.find('.tile' + i).click(function(){
		            showModal('tile-modal-2');
		        });	    		
	    	}
	    	if (i == 5 || i == 6 || i == 11 || i == 12) {
		        $elem.find('.tile' + i).click(function(){
		            showModal('tile-modal-3');
		        });	    		
	    	}
	    }
	});
}

export default {
  name: 'zoom-tile-modal',
  initialize() {
    withPluginApi('0.5', initializeModal);
  }
};