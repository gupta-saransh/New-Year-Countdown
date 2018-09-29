
            var today = new Date();
          var dd = today.getDate();
          var mm = today.getMonth()+1; //January is 0!
          var yyyy = today.getFullYear();

          if(dd<10) {
          dd = '0'+dd
          }

          if(mm<10) {
          mm = '0'+mm
          }
          today = dd + '/' + mm + '/' + yyyy;
          var minutes = 1000*60;
          var hours = minutes*60;
          var days = hours*24;

          var foo_date1 = getDateFromFormat(today, "d/M/y");
          var foo_date2 = getDateFromFormat("31/12/" + yyyy, "d/M/y");

          var diff_date = Math.round((foo_date2 - foo_date1)/days);
          document.getElementById('date').innerHTML=diff_date;
          console.log(today);
          var percent = Math.round(((365-diff_date)/365)*100)
         //alert("Diff date is: " + Math.round(percent)+"%" );
         function update() {
   var element = document.getElementById("myprogressBar");
   var width = percent;
       element.style.width = width+ '%';
       element.innerHTML = width * 1  + '%';
}
