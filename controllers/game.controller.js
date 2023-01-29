import Game from "../Models/games.model.js"




export function getAll (req,res)
{
   Game
   .find()
   .then(result=>{
    res.status(200).json(result);
   })
   .catch(err=> {

    res.status(500).json({error:err});
   });

}



export function addOnce (req,res)

{
   const game=new Game (
    {
        name:req.body.name , 
        year:req.body.year,
        onSale:req.body.onSale
    }
   ) ;

game
.save ()
.then(newGame=>
    {
        res.status(200).json(newGame);
    })

    .catch(err=>{
        res.status(500).json({error:err});
    });






}




export function putOnce (req,res)

{
}




