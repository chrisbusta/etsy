// var sidebar = items.results.map( function(item){
//   return item.taxonomy_path;
// });


// var sidebarItems = [];
//  sidebar.forEach( function (list) {
//   list.forEach( function (item) {
//     if (sidebarItems.indexof(item) === -1){
//       sidebarItems.push(item);
//     }
//   });
//  });


//  var sideBarUL = $('#sideBarCats');

//  sidebarItems.forEach( function(sbItem) {
//   sideBarUL.append("<li><a href='#'>" + sbItem  + "</a></li>");
//  });

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


    // itemHolder = "<li class ='itemData'>" + "<a href = 'http://etsy.com/listing/' + itemListLink + "'>" +itemImage + "</a>" + "<div class = 'itemText'>" + "<a class='title' href ='https://www.etsy.com/listing/" + itemListLink/" + "'>" + itemTitle + "</a>" + "<a href='" + "https://www.etsy.com/shop/" + itemSellerLink + "'>" + itemSeller + "</a>" + itemPrice + "</div>" + "</li>";


    // $itemData.append(itemHolder);



 });
});

