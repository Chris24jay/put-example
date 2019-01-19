let arrOfObjs = [
 {
  id: 0,
  name: 'Jay',
  age: 25
 },
 {
  id: 1,
  name: 'Scotty',
  age: 17
 }
]
module.exports = {
 read: (req, res) => {
  res.status(200).send(arrOfObjs)
 },
 update: (req, res) => {
  let { id } = req.params;
  let { text } = req.body;

  let object = arrOfObjs.find((element) => {
   return element.id === +id;
  })

  object.name = text;
  
  console.log(arrOfObjs)

  res.status(200).send(arrOfObjs);
 }
}