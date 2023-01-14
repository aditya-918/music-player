const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "e34ebf2f41msh9cdeb67c1c49afap198091jsnba70c5861c2b",
		"X-RapidAPI-Host": "spotify23.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
   //for
 
 
   var playList = JSON.parse(localStorage.getItem('playList')) || [];
 
   for (let i = 0; i < response.albums.items.length; i++) {
    // for(let j = 0; j < playList.length; j++){
      // if(playList[j]['name']==response.albums.items[i]['data']['name']){
      
      $('.grid').append('<div id="innerdiv" class="cell-width"> <div class="cell-height"><div class="item"><img class="song_img" src='+response.albums.items[i]['data']['coverArt']['sources'][0]['url']+'><p class="song_name" >'+response.albums.items[i]['data']['name']+'<i class="fa fa-heart"></i> </p></div></div></div>');
     
    //}
	// console.log(response.albums.items[i]['data']);
   // console.log(response.albums.items[i]['data']['coverArt']['sources'][0]['url'])
   }
});

$('.grid').on('click','.song_name i',function(){
 
  var oldItems = JSON.parse(localStorage.getItem('playList')) || [];
  $(this).css('color','red')
  console.log($(this).parent().text())
  console.log($(this).parent().parent().children('.song_img').attr('src'))

  const myObject = {
    name : $(this).parent().text(),
    img: $(this).parent().parent().children('.song_img').attr('src')
  }
  oldItems.push(myObject);
  window.localStorage.setItem("playList", JSON.stringify(oldItems));
  alert('Song Added to your playlist')
})



{/* <div class='cell-width'>
    <div class='cell-height'>
      <div class='item'>
        <img src="https://unsplash.it/200/300/?random">
      </div>
    </div>
  </div> */}