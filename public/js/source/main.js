/* jshint unused:false */

(function(){

  'use strict';

  $(document).ready(init);

  function init(){
    $('#search').click(lookUpFood);
  }

  function lookUpFood(){
    var url = 'https://api.nutritionix.com/v1_1/search/mcdonalds?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=7d638e0c&appKey=bbcdbd78f54a17ab76220266c65b5d36';
    $.getJSON(url, showFoods);
  }

  function showFoods(data){
    console.log(data);
    _.forEach(data.hits, function(hit){
      var $div = $('<div class="draggable"></div>').draggable();
      $div.text(hit.fields.item_name);
      $('#items').append($div);
    });
  }

})();
