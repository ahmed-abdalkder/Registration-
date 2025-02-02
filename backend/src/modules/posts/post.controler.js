import connection from "../../../db/connection.js"


export const getposts = (req,res,next)=>{
   
     const query =`select * from posts`

    connection.execute(query,(err,result)=>{
        if(err){
            return res.status(500).json({ message: "catch error", error: err.message });

         };

          return res.json({msg:"done",result})
    })
 
};

export const addpost = (req,res,next)=>{

    const{title, description, price} = req.body

     const query =`insert into posts(title,description,price)values("${title}","${description}","${price}")`

       connection.execute(query,(err,result)=>{
        if(err){
            return res.status(500).json({ message: "catch error", error: err.message });

         };
     
         
         return res.json(result)
    })
 
};

export const updatepost = (req,res,next)=>{

    const{ price,title,description,id} = req.body
     

     const query = `update posts  set price="${price}", title="${title}", description="${description}" where  id="${id}"`

       connection.execute(query,(err,result)=>{
        if(err){
            return res.status(500).json({ message: "catch error", error: err.message });
         };
         
         
         return res.json(result)
    })
 
};

export const deletepost = (req,res,next)=>{
     
     const{ id } =  req.body

     const query = `delete from posts where  id="${id}"`

      connection.execute(query,(err,result)=>{
        if(err){
            return res.status(500).json({ message: "catch error", error: err.message });
         };
         
         
         return res.json(result)
    })
 
};