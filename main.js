$(function () {
    $("input").on("click", function () {
        //var x = 5;
        //debugger;
        //alert("Hi");
        //$("h1").text("Hellow");
        var numberofListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random()*numberofListItem);
        $("h1").text($("li").eq(randomChildNumber).text());
    });
});
