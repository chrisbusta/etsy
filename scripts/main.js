
  $(document).ready(function(){





  var resultsof = $("#content-results");


 var itemPrice, itemTitle, itemCode, itemSeller, itemImage;
 var pics;



 items.results.forEach( function (item){
    pics = item.Images[0].url_170x135;
    itemTitle = "<p class = 'title'>" + item.title + "</p>";
    itemImage =  '<a class="itemImage"><img src="' + pics + '" /></a>';
    itemSeller = "<p class ='seller'>" + item.Shop.shop_name +  "</p>";
    itemPrice = "<p class ='price'>" + "$" + item.price + "usd" + "</p>";


    resultsbin = "<li> " + itemTitle + itemSeller + itemPrice  + itemImage  + "</li>";

    resultsof.append(resultsbin);





 });
});

