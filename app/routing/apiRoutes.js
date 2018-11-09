const path=require('path');

const servingTables=require('../data/restaurant.js');
const waitingList=require('../data/restaurant.js');



app.get('/api/make', (req, res)=>{
    res.json(servingTables);  
   })

app.get('/api/view', (req, res)=>{
 res.json(waitingList);
})


app.post('api/make', (req, res)=>{

if(servingTables.length<6){
    servingTable.push(req.body);
}
else{
waitingList.push(req.body);
}

})
