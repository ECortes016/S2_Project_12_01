"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: 
   Date:   
   
   Filename: tc_cart.js
	
*/

// This variable is to set the initial value of the order total, which will then be added on to.
var orderTotal = 0;

// This variable is to display table headers at the top of the table.
var cartHTML = "<table> <tr> <th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th> </tr>";

// This for loop will display all items which are added to the cart and will also calculate the cost of each item together forming a total cost
for (var i = 0; i < item.length; i++) {
    cartHTML += "<tr> <td><img src='tc_" + item[i] + ".png' alt='" + item[i] + "' /></td>";
    cartHTML += "<td>" + itemDescription[i] + "</td> <td>$" + itemPrice[i] + "</td> <td>" + itemQty[i] + "</td>";

    // This variable will calculate the amount of an item depending on the quantity of the item
    var itemCost = itemPrice[i] * itemQty[i];

    // 
    cartHTML += "<td>$" + itemCost + "</td></tr>"

    // The total of the order is calculated by adding the itemCost and the orderTotal values together
    orderTotal = itemCost + orderTotal;
}
// The for loop is applied to the div with the element id of cart which will then display the entire table.
cartHTML += "<tr> <td colspan='4'>Subtotal</td> <td>$" + orderTotal + "</td> </tr> </table>";

document.getElementById("cart").innerHTML = cartHTML;