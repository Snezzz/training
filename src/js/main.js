function go(to){

 $.ajax({
     url: to+".html",
     cache: false,
     success: function(html){
         $(".main").html(html);
     }
 });

}

function send(where) {
    $.ajax({
        url: where+".html",
        cache: false,
        success: function(html) {
            $(".main").html(html);
        }
    })
}
function give(who,activity) {
    var result = -1;
    var i = 0;
    $.ajax({
        type: 'get',
        url: "https://api.mongolab.com/api/1/databases/mydatabase/collections/hospital/5b35fd63fb6fc04e3540232e?apiKey=_6BDigQllIiJle4PerntiNKhm2-7vI0I",
        success: function (database) {
            var info = $("#info");
            info.html("");

            for (var j = 0; j < database.doctor.length; j++) {
                info.append("<tr>");
                info.append("<th scope='col'>" + (j+1) + "</th>");
                info.append("<th scope='col'>" + database.doctor[j].name + "</th>");
                info.append("<th scope='col'>" + database.doctor[j].status + "</th>");
                info.append("<th scope='col'>" + database.doctor[j].info[0].checkes_count + "</th>");
                info.append("<th scope='col'>" + database.doctor[j].info[0].free_count + "</th>");
                info.append("<th scope='col'>" + database.doctor[j].info[0].free_count + "</th>");
                info.append("</tr>");

            }
        }
    });
};
