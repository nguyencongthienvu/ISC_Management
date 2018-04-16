var express= require('express');
var router=express.Router();
var Db=require('../modules/db');
var Intake = Db.extend({tableName:"intakes"});
var intake = new Intake();
var result = require('../modules/response-result')

router.use(function(req,res,next){next();});
//get all intake
router.get('/',function(req,res){
    intake.find('all',function(err,rows,fields){
        if(err)
        {
            res.send({error:1,message:"Database Error!"});
        } else
        {
            res.send(rows);
        }
    });
});
//get intake with id_ITK
router.get('/:id(\\d+)',function(req,res){
    intake.find('first',{where: "id_ITK="+req.params.id},function(err,rows){
        if(err)
        {
            res.send({error:1,message:"Database Error!"});
        }else
        {
            res.send(rows);
        }
    });
});
//insert new intake
router.post('/', function(req, res){
    if(req.body.name_ITK && req.body.dayStart_ITK && req.body.dayEnd_ITK && req.body.maxQuantity_ITK && req.body.status_ITK){
        intake.set('name_ITK',req.body.name_ITK);
        intake.set('dayStart_ITK',req.body.dayStart_ITK);
        intake.set('dayEnd_ITK',req.body.dayEnd_ITK);
        intake.set('maxQuantity_ITK',req.body.maxQuantity_ITK);
        intake.set('status_ITK',req.body.status_ITK);
        intake.save(function(err, row){
            if(err){
                res.send({error:1,message:"Database Error!"});
            }else {
                intake.set('id_ITK', row.insertId);
                res.send(result.data(intake));
            }
        });
        //console.log(req.body)
    }else{
        res.send(result.error(2,"Missing field"))
    }
})
//update intake with id_ITK
router.put('/:id(\\d+)',function(req,res){
    if(req.body.name_ITK && req.body.dayStart_ITK && req.body.dayEnd_ITK && req.body.maxQuantity_ITK){
        intake.set('name_ITK',req.body.name_ITK);
        intake.set('dayStart_ITK',req.body.dayStart_ITK);
        intake.set('dayEnd_ITK',req.body.dayEnd_ITK);
        intake.set('maxQuantity_ITK',req.body.maxQuantity_ITK);
        intake.set('status_ITK',req.body.status_ITK);
        intake.save("id_ITK="+req.params.id,function(err, row){
            if(err){
                res.send(err);
            }else {
                intake.set('id_ITK', req.params.id);
                res.send(result.data(intake));
            }
        });
    }else{
        res.send({error: 2, message: "Missing field!"});
    }
})
//delete intake with id_ITK
router.delete('/:id(\\d+)',function(req,res){
    intake.find('count',{where:"id_ITK="+req.params.id}, function(err, result){
        if(err)
            res.send(err);
        else if(result > 0){
            intake.remove("id_ITK="+ req.params.id, function(err,row){
                if(err)
                    res.send({error:1,message:"Database Error!"});
                else
                    res.send({error:0,message:"Deleted Successfully!"});
            });
        }else{
            res.send({error:3,message:"Data Not Found!"});
        }
    })
})

module.exports =router;