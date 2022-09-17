# Launchpad Technical Challenge (Backend)

## Solution Outline
### Backend API (HTTP)
* POST request for order taking
* GET request to track order status from the backend
* GET request to get order for up to one year
### Backend Classes
* OrderList class
    * Array of Orders
* Order class containing the following fields:
    * (int) Quantity for each type of Pizza 
    * (LocalDateTime) Datestamp
    * (Status) Status stamp - Only Get function available
* Status class/enum

* Methods
    * OrderList.AddOrder(Order)
    * OrderList.RemoveOrdersBeyondOneYear()
    * Order.GetStatusStamp()
    * Constructors for OrderList() and Order(Quantity, Datestamp, Status == OrderReceived)

## Potential Improvements
* Apply Singleton pattern on the OrderList class since there should only be 1 constant OrderList used by the store
* Some unit tests for each class to test the functions
* Exceptions
    * Exception thrown when there are selections to see receipt for orders beyond 1 year
* Save the data into an SQL Database
    * OrderList Table
    * Order Table
