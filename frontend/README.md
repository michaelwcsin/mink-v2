TODO:

Tanstack Router: https://tanstack.com/router/latest

- Login screen

  - Directs to customer or manager state
  - Create new user (customer or manager)
  - Develop proper authentication (backend)

- Customer page

  - Directs to available restaurants
    - Directs to menu of restaurant
      - Add/Delete to cart
        - Update price + appropriate GST
      - Checkout functionality
        - Update delivery/pickup time/date
        - Redirect to manager
      - Update status functionality
        - Status of delivery

- Manager page
  - Restaurant dashboard
    - Edit/update restaurant details
      - Address, email, phone
    - Edit/update menu items
      - Price, availability, description
  - Analytics dashboard
    - View sale analytics
      - Total revenue
      - Items sold

WebFlow State
Login (Toggle or button for either customer/manager)

- Customer:
  - Restaurant select page (Navbar with exit/update profile etc)
    - Restaurant info + menu items
      - Selection of items
        - Checkout
          - Await orders
- Manager:
  - Dashboard (sidebar menu update, analytics, incoming orders)
