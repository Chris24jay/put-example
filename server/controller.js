let arrOfObjs = [
 {
  id: 0,
  name: 'Jay',
  age: 26
 },
 {
  id: 1,
  name: 'Scotty',
  age: 17
 },
 {
  id: 2,
  name: 'Katherine',
  age: 25
 },
 {
  id: 3,
  name: 'Cooper',
  age: 3
 },
 {
  id: 4,
  name: 'Max',
  age: 4
 },
 {
  id: 5,
  name: 'Sarah',
  age: 30
 },
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

  res.status(200).send(arrOfObjs);
 }
}