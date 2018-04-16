var express= require('express');
var router=express.Router();
var Db=require('../modules/db');
var School = Db.extend({tableName:"schools"});
var shool = new School();
var result = require('../modules/response-result')
router.use(function(req,res,next){next();});
//get all school
router.get('/',function(req,res){
    shool.find('all',function(err,rows,fields){
        if(err)
        {
            res.send({error:1,message:"Database Error!"});
        } else
        {
            res.send(rows);
        }
    });
});
//get room with id_PHG
router.get('/:id(\\d+)',function(req,res){
    shool.find('first',{where: "id_SCL="+req.params.id},function(err,rows){
        if(err)
        {
            res.send({error:1,message:"Database Error!"});
        }else
        {
            res.send(rows);
        }
    });
});
//insert new room
// router.post('/', function(req, res){
//     if(req.body.code_SCL && req.body.kinOf_PHG){
//         room.set('code_PHG',req.body.code_PHG);
//         room.set('kinOf_PHG',req.body.kinOf_PHG);
//         room.set('maxQuantity_PHG',req.body.maxQuantity_PHG);
//         room.set('active',req.body.active);
//         room.save(function(err, row){
//             if(err){
//                 res.send({error:1,message:"Database Error!"});
//             }else {
//                 room.set('id_PHG', row.insertId);
//                 res.send(result.data(room));
//             }
//         });
        
        
//     }else{
//         res.send(result.error(2,"Missing field"))
//     }
// })
// //update room with id_PHG
// router.put('/:id(\\d+)',function(req,res){
//     //console.log(req.params.id);
//     if(req.body.code_PHG && req.body.kinOf_PHG){
//         room.set('code_PHG',req.body.code_PHG);
//         room.set('kinOf_PHG',req.body.kinOf_PHG);
//         room.set('maxQuantity_PHG',req.body.maxQuantity_PHG);
//         room.set('active',req.body.active);
//         room.save("id_PHG="+req.params.id,function(err, row){
//             if(err){
//                 res.send(err);
//             }else {
//                 room.set('id_PHG', req.params.id);
//                 res.send(result.data(room));
//             }
//         });
//     }else{
//         res.send({error: 2, message: "Missing field!"});
//     }
// })
// //delete room with id_PHG
// router.delete('/:id(\\d+)',function(req,res){
//     room.find('count',{where:"id_PHG="+req.params.id}, function(err, result){
//         if(err)
//             res.send(err);
//         else if(result > 0){
//             room.remove("id_PHG="+ req.params.id, function(err,row){
//                 if(err)
//                     res.send({error:1,message:"Database Error!"});
//                 else
//                     res.send({error:0,message:"Deleted Successfully!"});
//             });
//         }else{
//             res.send({error:3,message:"Data Not Found!"});
//         }
//     })
// })

module.exports =router;