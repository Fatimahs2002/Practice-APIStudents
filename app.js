const express = require('express')
const app = express()
const xlsx=require('xlsx');




// console.log(data);
//enable cors on API level
var cors=require('cors')
app.use(cors())
//routing
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
// let data=[{id:13,name:'fatima'},{id:50,name:'ali'},{id:51,name:'omar'},{id:54,name:'rania'},{id:1210,name:'rony'}]
app.get('/', (req, res) =>{
     res.send('Hello World')
   })

app.get('/students', function (req, res) {
  const wb=xlsx.readFile('data.xlsx');
  let ws=wb.Sheets['Sheet1'];
  let data=xlsx.utils.sheet_to_json(ws);
     res.send(data);
   })
 
// app.listen(5000);
const PORT = process.env.PORT || 3030;

// your code

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
