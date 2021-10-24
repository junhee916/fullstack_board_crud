const boardBtn = document.getElementById("boardBtn")

const boardUpdateBtn = document.getElementById("boardUpdateBtn")

const showBtn = document.getElementById("showBtn")

boardBtn.addEventListener("click", function(){

    const board = $("#board").val()

    $.ajax({
        type : "POST",
        url : "/board",
        data : {
            board : board
        },
        success : function(response){

            
        }
    })
})

showBtn.addEventListener("click", function(){

    $.ajax({
        type : "GET",
        url : "/show/boardId",
        success : function(response){

        }
    })
})

boardUpdateBtn.addEventListener("click", function(){

    const board = $("#board_update").val()

    $.ajax({
        type : "PATCH",
        url : "/board",
        data : {
            board : board
        },
        success : function(response){

            
        }
    })
})