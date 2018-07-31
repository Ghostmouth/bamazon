// dependencies
var inquirer = require('inquirer');
var mysql = require('mysql');

// connect to database
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306, // put in port number

	// Your username
	user: 'root',

	// Your password
	password: 'root',
	database: 'bamazon'
});


function start(){
    //prints the items for sale and their details
    connection.query('SELECT * FROM products', function(err, res){
      if(err) throw err;
    
      console.log('_.~"~._.~"~._.~Welcome to BAMazon~._.~"~._.~"~._')
      console.log('----------------------------------------------------------------------------------------------------')
    
      for(var i = 0; i<res.length;i++){
        console.log("ID: " + res[i].item_id + " | " + "Product: " + res[i].product_name + " | " + "Department: " + res[i].department_name + " | " + "Price: " + res[i].price + " | " + "QTY: " + res[i].stock_quantity);
        console.log('--------------------------------------------------------------------------------------------------')
      }

    console.log(' ');
    // Asks for purchase info
	inquirer.prompt([
		{
			type: 'input',
			name: 'id',
			message: 'Please enter the Item ID which you would like to purchase.',
      filter: Number,
      validate: function(value){
                if(isNaN(value) == false && parseInt(value) <= res.length && parseInt(value) > 0){
              return true;
            } else{
              return false;
            }
        }
		},
		{
			type: 'input',
			name: 'quant',
			message: 'How many do you need?',
            filter: Number,
            validate: function(value){
                if(isNaN(value)){
                  return false;
                } else{
                  return true;
                }
              }
        } ]).then(function(ans){
          var item = ans.id;
          var quantity = parseInt(ans.quant);
          var totalCost = parseFloat(((item.price) * quantity).toFixed(2));  

          console.log(totalCost)

            // in stock?
            if(res[ans.id].stock_quantity >= quantity){
                //after purchase, updates quantity in Products
                connection.query("UPDATE products SET ? WHERE ?", [
                {stock_quantity: (res[item].stock_quantity - quantity)},
                {item_id: ans.id}
                ], function(err, result){
                    if(err) throw err;
                    console.log("Success! Your total is $" + totalCost.toFixed(2) + ". Don't wait up for your item, sucker.");
                });

              } else{
                    console.log("Sorry, there's not enough in stock!");
                  }

        })
          
}) 
}

start();