
  $(document).ready(function(){





  var resultsof = $("#content-results");


 var itemPrice, itemTitle, itemCode, itemSeller, itemImage, social;
 var pics;



 items.results.forEach( function (item){
    pics = item.Images[0].url_170x135;
    itemTitle = "<p class = 'title'>" + item.title + "</p>";
    itemImage =  '<a class="itemImage"><img src="' + pics + '" /></a>';
    itemSeller = "<p class ='seller'>" + item.Shop.shop_name +  "</p>";
    itemPrice = "<p class ='price'>" + "$" + item.price + "usd" + "</p>";
    social = '<div class="socialRow">' + '<button class="socialBtn">' + '<div class="socialFav">' + '</div>' + '</button>' + '<button class="socialBtn">' + '<div class="socialHam">' + '</div>' + '</button>' + '</div>';


    resultsbin = "<li> " + itemImage + itemTitle + itemSeller + itemPrice + social + "</li>";

    resultsof.append(resultsbin);





 });
});

