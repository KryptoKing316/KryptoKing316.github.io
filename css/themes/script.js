
$.ajax({
    url: "https://api.github.com/users/KryptoKing316/repos",
    dataType: "json",
    success: function (returndata) {
        $("#result").html(returndata[0]["object"]["sha"]);
        alert('Load was performed.');
    }
}); 