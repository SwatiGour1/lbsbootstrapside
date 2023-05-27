const counters=document.querySelectorAll('.counter');
// console.log("hello");
counters.forEach((counter)=>{
counter.innerHTML=0;
const updatecounter=()=>{
const targetcount=+counter.getAttribute('data-target');
const startingCount=Number(counter.innerHTML);
const incr=targetcount/100;
if(startingCount<targetcount){
    counter.innerHTML=`${Math.round(startingCount+incr)}`;
    setTimeout(updatecounter,10)
}
else{
    counter.innerHTML=targetcount;
}
}
updatecounter();
})
function myfunction() {
    alert("Results is opening  please wait a second!");
  }
  function MyClose(){
confirm("do you want to close this");
  }
  function initMap() {
    
    var myLatLng = {lat: 37.7749, lng: -122.4194};

    // Create a map centered on the specified coordinates
    var map = new google.maps.Map(document.getElementById('map'), {
      center: myLatLng,
      zoom: 12
      
    });
 var marker = new google.maps.Marker({
      map: map,
      position: myLatLng,
      title: 'Our Location'
    });
  }
  