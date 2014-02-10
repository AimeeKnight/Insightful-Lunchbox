/* jshint unused:false */

(function(){

  'use strict';

  $(document).ready(init);
  var total = 0;

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
      var $nameDiv = $('<div class="draggable"></div>');
      var $calorieSpan = $('<span class="calorie-span"></span>');
      $nameDiv.text(hit.fields.item_name + ': ');
      $calorieSpan.text(hit.fields.nf_calories);
      $nameDiv.append($calorieSpan);
      $nameDiv.draggable({
        stop: calculateCalories
      });
      $('#box').droppable({
        drop: handleDrop
      });
      $('#items').append($nameDiv);
    });
  }

  function calculateCalories(event, ui){
    var itemCalories = $(this).find('span').text() * 1;
    total += itemCalories;
    $('#calories').text(total);
  }

  function handleDrop(event, ui){
      
  }

})();
