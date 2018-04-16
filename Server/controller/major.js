var express= require('express');
var router=express.Router();
var Db=require('../modules/db');
var Major = Db.extend({tableName:"majors"});
var major = new Major();
var result = require('../modules/response-result')
router.use(function(req,res,next){next();});
//get all majors
router.get('/',function(req,res){
    major.find('all',function(err,rows,fields){
        if(err)
        {
            res.send({error:1,message:"Database Error!"});
        } else
        {
            res.send(rows);
        }
    });
});
//get major with id_MJR
router.get('/:id(\\d+)',function(req,res){
    major.find('first',{where: "id_MJR="+req.params.id},function(err,rows){
        if(err)
        {
            res.send({error:1,message:"Database Error!"});
        }else
        {
            res.send(rows);
        }
    });
});
//insert new major
router.post('/', function(req, res){
    //res.send(req.body);
    if(req.body.code_MJR && req.body.name_MJR){
        major.set('code_MJR',req.body.code_MJR);
        major.set('name_MJR',req.body.name_MJR);
        major.set('status_MJR',req.body.status_MJR);
        major.save(function(err, row){
            if(err){
                res.send({error:1,message:"Database Error!"});
            }else {
                major.set('id_MJR', row.insertId);
                res.send(result.data(major));
            }
        });
    }else{
        res.send(result.error(2,"Missing field"))
    }
})
//update major with id_MJR
router.put('/:id(\\d+)',function(req,res){
    if(req.body.code_MJR && req.body.name_MJR){
        major.set('code_MJR',req.body.code_MJR);
        major.set('name_MJR',req.body.name_MJR);
        major.set('status_MJR',req.body.status_MJR);
        major.save("id_MJR="+req.params.id,function(err, row){
            if(err){
                res.send(err);
            }else {
                major.set('id_MJR', req.params.id);
                res.send(result.data(major));
            }
        });
    }else{
        res.send({error: 2, message: "Missing field!"});
    }
})
//delete major with id_MJR
router.delete('/:id(\\d+)',function(req,res){
    major.find('count',{where:"id_MJR="+req.params.id}, function(err, result){
        if(err)
            res.send(err);
        else if(result > 0){
            major.remove("id_MJR="+ req.params.id, function(err,row){
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