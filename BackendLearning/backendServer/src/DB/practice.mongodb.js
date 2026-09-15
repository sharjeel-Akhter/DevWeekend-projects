// db.orders.insertMany([
//   {
//     customer: "Ali",
//     product: "Laptop",
//     price: 1000,
//     quantity: 2,
//     status: "completed",
//     tags: ["electronics", "work"]
//   },
//   {
//     customer: "Ali",
//     product: "Mouse",
//     price: 50,
//     quantity: 3,
//     status: "completed",
//     tags: ["electronics", "accessories"]
//   },
//   {
//     customer: "Ahmed",
//     product: "Laptop",
//     price: 1000,
//     quantity: 1,
//     status: "pending",
//     tags: ["electronics", "work"]
//   },
//   {
//     customer: "Sara",
//     product: "Keyboard",
//     price: 100,
//     quantity: 2,
//     status: "completed",
//     tags: ["electronics", "accessories"]
//   },
//   {
//     customer: "Ahmed",
//     product: "Monitor",
//     price: 300,
//     quantity: 2,
//     status: "completed",
//     tags: ["electronics", "display"]
//   },
//   {
//     customer: "Sara",
//     product: "Mouse",
//     price: 50,
//     quantity: 1,
//     status: "completed",
//     tags: ["electronics", "accessories"]
//   },
//   {
//     customer: "Ali",
//     product: "Keyboard",
//     price: 100,
//     quantity: 1,
//     status: "cancelled",
//     tags: ["electronics", "accessories"]
//   },
//   {
//     customer: "Hamza",
//     product: "Laptop",
//     price: 1000,
//     quantity: 1,
//     status: "completed",
//     tags: ["electronics", "work"]
//   },
//   {
//     customer: "Hamza",
//     product: "Mouse",
//     price: 50,
//     quantity: 2,
//     status: "completed",
//     tags: ["electronics", "accessories"]
//   },
//   {
//     customer: "Sara",
//     product: "Monitor",
//     price: 300,
//     quantity: 1,
//     status: "pending",
//     tags: ["electronics", "display"]
//   }
// ])


// db.orders.find({})


// db.orders.find({
//     customer:'Ali',
//     price: { $gte: 1000 }
// })

// db.orders.find({
//     $and: [
//        { customer: "Ali" },
//        { status: "completed" }
//     ],

// })


db.orders.find().skip(5).limit(5)

// Aggregation pipeline
// match is used to filter on basis of conditions
// group is used to group data in specific fields i.e id as name, and calculate totalSpent
// sort is used to sort data in descending order.

// db.orders.aggregate([
//     { $match: { status:'completed'} },
//     { $group: { _id: "$customer", totalSpent: { $sum: { $multiply: [ '$price',  '$quantity' ] } }}},
//     { $sort:  { totalSpent: -1 }}
// ])

