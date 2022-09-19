# Launchpad Technical Challenge (Backend)
## Assumptions
* Set menu consists of only:
    * Cheese Pizza
    * Pepperoni Pizza
    * Margherita Pizza

## Solution Outline
A user should only be able to make/view orders in their own account.
Hence a login system is required beforehand so that the system can check if the user is verified to be logged in before making/viewing the orders that are linked to their account. 

### Backend API (HTTP)
* POST request with endpoint '/orders' - Take order
    **Description**
    NOTE: Order Schema available for reference
    POST request body contains the current user, 
    quantities for each pizza type (Cheese, Pepperoni, Margherita),
    the payment method. 
    We will first check if the current user is logged in/verified.
    We will then check if the quantities given are positive.
    If the numbers are negative, we send back an error saying that 
    only positive numbers are accepted. 
    Lastly, we will check if there is a payment method. 
    If there is no payment method, it means that the user has not paid 
    and we send back an error saying that payment is required. 
    After verifications, we will create an orderID using the UUID library.
    We will calculate the total bill amount by taking the 
    item quantity * item price which we have as an enum on the backend.
    We will not have any input for orderStatus and orderDate to keep them as default.
    We will create an Order with the orderID, individual quantities, 
    total bill amount, and payment method. 
    We will save the Order under the user's account.
    (Hence the orders, array of order, field in accountSchema).
    Send back a message saying that Order has been successfully made.  

* GET request with endpoint '/orders/:id' - Track order status of specified order
    **Description**
    GET request parameter should contain an ID (String) 
    which is the orderID in the Order Schema. 
    If there is no ID in the parameter, send back an error that there is no ID.
    Else, use the ID to find the corresponding Order with the matching orderID.
    Retrieve the orderStatus of the Order.
    Send back the orderStatus of the Order. 

* GET request with endpoint '/orders/:date' - Get a receipt of an order for up to one year (Assuming that a script will be run daily to remove any Order that has been in the database for over one year)
    **Description**
    GET request parameter (date) is a dateString (String).
    If there is no dateString in the parameter, send back an error that there is no dateString.
    Convert the dateString to a Date (Date type).
    Check if the Date is more than one year past the date today.
    If the Date is more than one year past the date today, send back an error 
    that the orderDate requested is beyond one year. 
    Use the Date to find the corresponding Order with the matching orderDate.
    Retrieve the Order.
    Send back the Order. 

* POST request with endpoint '/accounts/login' - For user to login
* POST request with endpoint '/accounts/signup' - For user to sign up for an account

### Model
* Order Model:
    * (String) orderID 
        * value cannot be set by the API and is only randomly generated when API endpoint is called
        * value is generated by UUID library
        * required since it is the identifier of the order
    * (Number) cheesePizzaQuantity
    * (Number) pepperoniPizzaQuantity
    * (Number) margheritaPizzaQuantity
    * (Number) totalAmount
        * value is calculated on the backend
        * required since it is required in a receipt
    * (String) paymentMethod
        * required since user has to pay first before order is made
    * (String) orderStatus 
        * value cannot be set by the API and is set to 'Order Received' by default
        * value can only be changed by the backend services during the Pizza making process
    * (Date) orderDate 
        * value cannot be set by the API and is set to the date when the order is made by default
        * required since it is an needed for order lookup

* Account Model
    * (String) accountEmail
    * (String) accountPasword
    * (Array of Order) orders

## Considerations
* Pizza customizations
* Menu expansion

## Potential Technical Improvements
* Some unit tests for each class to test the functions
* Exceptions
    * Exception thrown when there are selections to see receipt for orders beyond 1 year
    * Exception thrown when there are no pizza quantities in the order
* Construct a Status enum (reduce typo errors and easier change of values) with the following options:
    * OrderReceived
    * ToppingsAdded
    * PizzaBaking
    * PizzaReady
* Implement async/await in the API implementations to increase system efficiency when accessing the database
* Replace the callbacks in the router with methods in a Controller class for greater modularity
* Replace the login process with 'Passport.js'/'Firebase Auth' for more secure user authentication
* Use the 'bcrypt' library to hash and salt the password for better security
* Implement the script to remove orders that are over 1 year
