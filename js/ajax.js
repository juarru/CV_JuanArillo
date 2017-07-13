/**
 * Created by juan_arillo on 13/7/17.
 */

var comment = [];

var drawcomment = function() {
    $('#commentContainer').empty();

    if (comment.length == 0) {
        $('#commentContainer').append("<li>No existen comentarios</li>");
    } else {
        var contentToAdd = '';
        for (var i = 0; i < comment.length; i++) {
            contentToAdd += '<li class="task-item">' + comment[i].name + '<button class="deleteComment" data-comment-id="' + comment[i].id + '">Eliminar</button></li>'
        }
        $('#commentContainer').append(contentToAdd);
    }
}

var getComment = function () {
    var XHR = new XMLHttpRequest();
    XHR.open("GET", "http://localhost:8000/api/comment", true);
    XHR.setRequestHeader("Content-Type", "application/json");

    XHR.onreadystatechange = function () {
        if (XHR.readyState === 4) {
            comment = JSON.parse(XHR.responseText);
            drawcomment();
        } else if (XHR.readyState === 4 && XHR.status === 404) {
            console.log("Página no encontrada");
        }
    }

    XHR.send();
}

var createComment = function (name) {
    var XHR = new XMLHttpRequest();
    XHR.open("POST", "http://localhost:8000/api/comment", true);
    XHR.setRequestHeader("Content-Type", "application/json");

    XHR.onreadystatechange = function () {
        if (XHR.readyState === 4) {
            console.log(JSON.parse(XHR.responseText))
            comment.push(JSON.parse(XHR.responseText));
            drawcomment();
        } else if (XHR.readyState === 4 && XHR.status === 404) {
            console.log("Página no encontrada");
        }
    }

    XHR.send(JSON.stringify({"name": name}));
}

var deleteComment = function (id) {
    var XHR = new XMLHttpRequest();
    XHR.open("DELETE", "http://localhost:8000/api/comment/" + id, true);
    XHR.setRequestHeader("Content-Type", "application/json");

    XHR.onreadystatechange = function () {
        if (XHR.readyState === 4) {
            console.log("Comment deleted");
            getComment();
        } else if (XHR.readyState === 4 && XHR.status === 404) {
            console.log("Página no encontrada");
        }
    }

    XHR.send();
}

document.getElementById("sendNewComment").addEventListener("click", function (event) {
    event.preventDefault();
    createComment(document.getElementById("newCommentText").value);
})


getComment();

$(document).on('click', '.deleteComment', function(){
    var id = $(this).data('commentId');
    deleteComment(id);
});
