# Launchpad Technical Challenge (Backend)
## Assumptions
* Set menu consists of only:
    * Cheese Pizza
    * Pepperoni Pizza
    * Margherita Pizza

## Solution Outline
### Backend API (HTTP)
* POST request with endpoint '/orders' - Take order
* GET request with endpoint '/orders/:id' - Track order status of specified order
* GET request with endpoint '/orders' - Get receipt for orders for up to one year

### Features
* UUID feature for each order

### Model
* Order Model:
    * (Number) cheesePizzaQuantity
    * (Number) pepperoniPizzaQuantity
    * (Number) margheritaPizzaQuantity
    * (String) orderStatus - value cannot be set by the API and is set to 'Order Received' by default
    * (Date) orderDate - value cannot be set by the API and is set to the date when the order is made by default
    * (String) orderID - value cannot be set by the API and is only generated when API endpoint is called

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


