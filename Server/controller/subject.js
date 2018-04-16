var express= require('express');
var router=express.Router();
var Db=require('../modules/db');
var Subject = Db.extend({tableName:"subjects"});
var subject = new Subject();
var result = require('../modules/response-result')
router.use(function(req,res,next){next();});
//get all subject
router.get('/',function(req,res){
    subject.find('all',function(err,rows,fields){
        if(err)
        {
            res.send({error:1,message:"Database Error!"});
        } else
        {
            res.send(rows);
        }
    });
});
//get subject with id_SBJ
router.get('/:id(\\d+)',function(req,res){
    subject.find('first',{where: "id_SBJ="+req.params.id},function(err,rows){
        if(err)
        {
            res.send({error:1,message:"Database Error!"});
        }else
        {
            res.send(rows);
        }
    });
});
//insert new subject
router.post('/', function(req, res){
    if(req.body.code_SBJ && req.body.name_SBJ && req.body.hour_SBJ && req.body.kindOfRoom){
        subject.set('code_SBJ',req.body.code_SBJ);
        subject.set('name_SBJ',req.body.name_SBJ);
        subject.set('hour_SBJ',req.body.hour_SBJ);
        subject.set('status_SBJ',req.body.status_SBJ);
        subject.set('kindOfRoom',req.body.kindOfRoom);
        subject.save(function(err, row){
            if(err){
                res.send({error:1,message:"Database Error!"});
            }else {
                subject.set('id_SBJ', row.insertId);
                res.send(result.data(subject));
            }
        });
    }else{
        res.send(result.error(2,"Missing field"))
    }
})
//update subject with id_SBJ
router.put('/:id(\\d+)',function(req,res){
    if(req.body.code_SBJ && req.body.name_SBJ && req.body.hour_SBJ && req.body.kindOfRoom){
        subject.set('code_SBJ',req.body.code_SBJ);
        subject.set('name_SBJ',req.body.name_SBJ);
        subject.set('hour_SBJ',req.body.hour_SBJ);
        subject.set('status_SBJ',req.body.status_SBJ);
        subject.set('kindOfRoom',req.body.kindOfRoom);
        subject.save("id_SBJ="+req.params.id,function(err, row){
            if(err){
                res.send(err);
            }else {
                subject.set('id_SBJ', req.params.id);
                res.send(result.data(subject));
            }
        });
    }else{
        res.send({error: 2, message: "Missing field!"});
    }
})
//delete subject with id_SBJ
router.delete('/:id(\\d+)',function(req,res){
    subject.find('count',{where:"id_SBJ="+req.params.id}, function(err, result){
        if(err)
            res.send(err);
        else if(result > 0){
            subject.remove("id_SBJ="+ req.params.id, function(err,row){
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