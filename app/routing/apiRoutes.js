const path=require('path');

const servingTables=require('../data/restaurant.js');
const waitingList=require('../data/waitingList.js');

app.get('/api/make', (req, res)=>{
    console.log(servingTables);
    res.json(servingTables);  
   })

app.get('/api/view', (req, res)=>{
    console.log(waitingList);
 res.json(waitingList);
})


app.post('/api/make', (req, res)=>{

if(servingTables.length<6){
    servingTable.push(req.body);
}
else{
waitingList.push(req.body);
}
})
