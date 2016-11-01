import { withPluginApi } from 'discourse/lib/plugin-api';
import showModal from 'discourse/lib/show-modal';

function initializeModal(api) {
    api.decorateCooked($elem => {
        //add zoomin icon
        //use css in discourse admin to put this icon on tile images
        $elem.find('.tile1').parent().append('<i class="fa fa-search-plus" id="zoom-in-icon1" aria-hidden="true" style="display:none"></i>');
        $elem.find('.tile1').parent().append('<i class="fa fa-search-plus" id="zoom-in-icon2" aria-hidden="true" style="display:none"></i>');
        $elem.find('.tile1').parent().append('<i class="fa fa-search-plus" id="zoom-in-icon3" aria-hidden="true"></i>');

        var tileGroup1 = [1, 2, 7, 8],
        tileGroup2 = [3, 4, 9, 10],
        tileGroup3 = [5, 6, 11, 12];

        //show tile in modal and add hover effect 
        var hover = function(tileIds){
            //tile hover
            $elem.find('.tile' + tileId).addClass('hover');
            for(var i = 0; i < tileIds.length; i++ ) {
                var tileId = tileIds[i];
                $elem.find('.tile' + tileId).addClass('hover');
            }
            // Show/hide zoom in icon on desktop only.
            if ($('html').hasClass('desktop-view')) {
                if (tileGroup1 === tileIds) {
                    $('#zoom-in-icon1').show();
                } else if (tileGroup2 === tileIds) {
                    $('#zoom-in-icon2').show();
                } else if (tileGroup3 === tileIds) {
                    $('#zoom-in-icon3').show();
                }
            }

        }

        var unHover = function(tileIds){
            for(var i = 0; i < tileIds.length; i++ ) {
                var tileId = tileIds[i];
                $elem.find('.tile' + tileId).removeClass('hover');
            }

            if ($('html').hasClass('desktop-view')) {
                if (tileGroup1 === tileIds) {
                    $('#zoom-in-icon1').hide();
                } else if (tileGroup2 === tileIds) {
                    $('#zoom-in-icon2').hide();
                } else if (tileGroup3 === tileIds) {
                    $('#zoom-in-icon3').hide();
                }               
            }
        }

        $elem.find('.tile1, .tile2, .tile7, .tile8, #zoom-in-icon1').hover(function(){
            hover(tileGroup1);
        }, function(){
            unHover(tileGroup1);
        });
        $elem.find('.tile1, .tile2, .tile7, .tile8').click(function(){
            showModal('tile-modal-1');
        });

        $elem.find('.tile3, .tile4, .tile9, .tile10, #zoom-in-icon2').hover(function(){
            hover(tileGroup2);
        }, function(){
            unHover(tileGroup2);
        });
        $elem.find('.tile3, .tile4, .tile9, .tile10').click(function(){
            showModal('tile-modal-2');
        })

        $elem.find('.tile5, .tile6, .tile11, .tile12, #zoom-in-icon3').hover(function(){
            hover(tileGroup3);
        }, function(){
            unHover(tileGroup3);
        });
        $elem.find('.tile5, .tile6, .tile11, .tile12').click(function(){
            showModal('tile-modal-3');
        })
    });
}

export default {
  name: 'zoom-tile-modal',
  initialize() {
    withPluginApi('0.5', initializeModal);
  }
};