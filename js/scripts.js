$(document).ready(function(){
  $("form#stress_test").submit(function(event){
    event.preventDefault();
    var counter1 = 0;
    var counter2 = 0;
    var counter3 = 0;
    var msg ="";

    $("input:checkbox[name=warning-signs]:checked").each(function(){
      counter1 ++;
    });

     $("input:checkbox[name=symptoms]:checked").each(function(){
       counter2 ++;
     });

     $("input:checkbox[name=deal]:checked").each(function(){
      counter3 ++;
     });
    $('#stress_test').hide();
  // $("#signs-responses").show();
  //   $("#symptoms-responses").show();
  //       $("#deal-responses").show();

  if (counter1 >= 3 && counter2 >= 2) {
    msg ='You should go get help!';
  }
  else if (counter2 < 2 && counter3 > 3) {
    msg = 'It looks like you are doing a good job of managing you stress!'
  } else {
    msg = 'You are doing so-so.'
  }
 $(".result").text(msg);
});
});
