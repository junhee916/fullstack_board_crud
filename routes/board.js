const express = require('express')
const router = express.Router()
const boardModel = require('../model/board')

// total get board
router.get('/list', async (req, res) => {

    try{
        const boards = await boardModel.find()

        res.render("../views/board", {boards : boards});
    }
    catch(err){
        res.status(500).json({
            msg : err.message
        })
    }
})

// detail get board
router.get('/show/:boardId', async (req, res) => {

    const id = req.params.boardId

    try{
        const board = await boardModel.findById(id)

        res.render('../views/show', {board: board})
    }
    catch(err){
        res.status(500).json({
            msg : err.message
        })
    }
})

// register board
router.post('/', async (req, res) => {

    const {board} = req.body

    const newBoard = new boardModel({
        board
    })

    try{
        const board = await newBoard.save()

        res.status(200).json({
            msg : "register board",
            boardInfo : {
                id : board._id,
                board : board.board
            }
        })
    }
    catch(err){
        res.status(500).json({
            msg : err.message
        })
    }
})

// update board
router.post('/update/:boardId', async (req, res) => {

    const id = req.params.boardId

    const {boardData} = req.body

    try{
        const board = await boardModel.findOneAndUpdate(id, {$set : {
            board : boardData
        }})

        if(!board){
            return res.status(402).json({
                msg : "no boardId"
            })
        }
        else{
            res.status(200).json({
                msg : "update board by id: " + id
            })
        }
    }
    catch(err){
        res.status(500).json({
            msg : err.message
        })
    }
})

// total delete board
router.delete('/', async (req, res) => {

    try{
        await boardModel.remove()

        res.status(200).json({
            msg : "delet boards"
        })
    }
    catch(err){
        res.status(500).json({
            msg : err.message
        })
    }
})

// detail delete board
router.post('/delete/:boardId', async (req, res) => {

    const id = req.params.boardId

    try{
        const board = await boardModel.findByIdAndRemove(id)

        if(!board){
            return res.status(200).json({
                msg : "no boardId"
            })
        }
        else{
            res.status(200).json({
                msg : "delete board by id: " + id
            })
        }
    }
    catch(err){
        res.status(500).json({
            msg : err.message
        })
    }
})

module.exports = router