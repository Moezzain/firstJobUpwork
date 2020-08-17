// :::::Start with imports::::
//__Express framework import__
const express = require('express');
//__used to access of the .env file__
require('dotenv').config();
//__used to parse the body of the requests to a JSON format for easier handeling of the data__
const BodyParser = require('body-parser');

//__Controlers__
const APIcontrollers = require('./Controlers/API_Controlers');

// :::::Creat and Start Express App:::::
const app = express();
//__listen to specific port that application will be working on__
//__PORT specified in the .env file__
app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`),
);

//__requests body parsing handelers__
app.use(BodyParser.json()); // support json encoded bodies
app.use(BodyParser.urlencoded({extended: true})); // support url_encoded bodies

// :::::::::Routes::::::::
//__Test Running__
app.get('/Test/:id', (req, res) => {
  let ret = {};
  ret.Succ = 'True';
  res.send(ret);
});

//__Cancellation_reasons CRUD__
app.get(
  '/cancellation_reasons/:id',
  APIcontrollers._cancellation_reasons_Read_,
); //Read
app.post('/cancellation_reasons', APIcontrollers._cancellation_reasons_Creat_); //Creat
app.put('/cancellation_reasons', APIcontrollers._cancellation_reasons_Update_); //Update
app.delete(
  '/cancellation_reasons/:id',
  APIcontrollers._cancellation_reasons_Delete_,
); //Delete

// //__Categories CRUD__
// app.get('/categories/:id', APIcontrollers._categories_Read_); //Read
// app.post('/categories', APIcontrollers._categories_Creat_); //Creat
// app.put('/categories', APIcontrollers._categories_Update_); //Update
// app.delete('/categories/:id', APIcontrollers._categories_Delete_); //Delete

// //__Cities CRUD__
// app.get('/cities/:id', APIcontrollers._cities_Read_); //Read
// app.post('/cities', APIcontrollers._cities_Creat_); //Creat
// app.put('/cities', APIcontrollers._cities_Update_); //Update
// app.delete('/cities/:id', APIcontrollers._cities_Delete_); //Delete

// //__Contact_us_forms CRUD__
// app.get('/contact_us_forms/:id', APIcontrollers._contact_us_forms_Read_); //Read
// app.post('/contact_us_forms', APIcontrollers._contact_us_forms_Creat_); //Creat
// app.put('/contact_us_forms', APIcontrollers._contact_us_forms_Update_); //Update
// app.delete('/contact_us_forms/:id', APIcontrollers._contact_us_forms_Delete_); //Delete

// //__Customers_us_forms CRUD__
// app.get('/customers/:id', APIcontrollers._customers_Read_); //Read
// app.post('/customers', APIcontrollers._customers_Creat_); //Creat
// app.put('/customers', APIcontrollers._customers_Update_); //Update
// app.delete('/customers/:id', APIcontrollers._customers_Delete_); //Delete

// //__Customers_types CRUD__
// app.get('/customers_types/:id', APIcontrollers._customers_types_Read_); //Read
// app.post('/customers_types', APIcontrollers._customers_types_Creat_); //Creat
// app.put('/customers_types', APIcontrollers._customers_types_Update_); //Update
// app.delete('/customers_types/:id', APIcontrollers._customers_types_Delete_); //Delete

// //__Data_rows CRUD__
// app.get('/data_rows/:id', APIcontrollers._data_rows_Read_); //Read
// app.post('/data_rows', APIcontrollers._data_rows_Creat_); //Creat
// app.put('/data_rows', APIcontrollers._data_rows_Update_); //Update
// app.delete('/data_rows/:id', APIcontrollers._data_rows_Delete_); //Delete

// //__Data_types CRUD__
// app.get('/data_types/:id', APIcontrollers._data_types_Read_); //Read
// app.post('/data_types', APIcontrollers._data_types_Creat_); //Creat
// app.put('/data_types', APIcontrollers._data_types_Update_); //Update
// app.delete('/data_types/:id', APIcontrollers._data_types_Delete_); //Delete

// //__Data_types CRUD__
// app.get('/data_types/:id', APIcontrollers._data_types_Read_); //Read
// app.post('/data_types', APIcontrollers._data_types_Creat_); //Creat
// app.put('/data_types', APIcontrollers._data_types_Update_); //Update
// app.delete('/data_types/:id', APIcontrollers._data_types_Delete_); //Delete

// //__Deliveries CRUD__
// app.get('/deliveries/:id', APIcontrollers._deliveries_Read_); //Read
// app.post('/deliveries', APIcontrollers._deliveries_Creat_); //Creat
// app.put('/deliveries', APIcontrollers._deliveries_Update_); //Update
// app.delete('/deliveries/:id', APIcontrollers._deliveries_Delete_); //Delete

// //__Delivery_car_types CRUD__
// app.get('/delivery_car_types/:id', APIcontrollers._delivery_car_types_Read_); //Read
// app.post('/delivery_car_types', APIcontrollers._delivery_car_types_Creat_); //Creat
// app.put('/delivery_car_types', APIcontrollers._delivery_car_types_Update_); //Update
// app.delete('/delivery_car_types/:id', APIcontrollers._delivery_car_types_Delete_); //Delete

// //__Delivery_drivers_offers CRUD__
// app.get(
//   '/delivery_drivers_offers/:id',
//   APIcontrollers._delivery_drivers_offers_Read_,
// ); //Read
// app.post(
//   '/delivery_drivers_offers',
//   APIcontrollers._delivery_drivers_offers_Creat_,
// ); //Creat
// app.put(
//   '/delivery_drivers_offers',
//   APIcontrollers._delivery_drivers_offers_Update_,
// ); //Update
// app.delete(
//   '/delivery_drivers_offers/:id',
//   APIcontrollers._delivery_drivers_offers_Delete_,
// ); //Delete

// //__Delivery_states CRUD__
// app.get('/delivery_states/:id', APIcontrollers._delivery_states_Read_); //Read
// app.post('/delivery_states', APIcontrollers._delivery_states_Creat_); //Creat
// app.put('/delivery_states', APIcontrollers._delivery_states_Update_); //Update
// app.delete('/delivery_states/:id', APIcontrollers._delivery_states_Delete_); //Delete

// //__Faqs ( Freaquantly Asked Questions ) CRUD__
// app.get('/faqs/:id', APIcontrollers._faqs_Read_); //Read
// app.post('/faqs', APIcontrollers._faqs_Creat_); //Creat
// app.put('/faqs', APIcontrollers._faqs_Update_); //Update
// app.delete('/faqs/:id', APIcontrollers._faqs_Delete_); //Delete

// //__Jobs CRUD__
// app.get('/jobs/:id', APIcontrollers._jobs_Read_); //Read
// app.post('/jobs', APIcontrollers._jobs_Creat_); //Creat
// app.put('/jobs', APIcontrollers._jobs_Update_); //Update
// app.delete('/jobs/:id', APIcontrollers._jobs_Delete_); //Delete

// //__Menu_items CRUD__
// app.get('/menu_items/:id', APIcontrollers._menu_items_Read_); //Read
// app.post('/menu_items', APIcontrollers._menu_items_Creat_); //Creat
// app.put('/menu_items', APIcontrollers._menu_items_Update_); //Update
// app.delete('/menu_items/:id', APIcontrollers._menu_items_Delete_); //Delete

// //__Menus CRUD__
// app.get('/menus/:id', APIcontrollers._menus_Read_); //Read
// app.post('/menus', APIcontrollers._menus_Creat_); //Creat
// app.put('/menus', APIcontrollers._menus_Update_); //Update
// app.delete('/menus/:id', APIcontrollers._menus_Delete_); //Delete

// //__Migrations CRUD__
// app.get('/migrations/:id', APIcontrollers._migrations_Read_); //Read
// app.post('/migrations', APIcontrollers._migrations_Creat_); //Creat
// app.put('/migrations', APIcontrollers._migrations_Update_); //Update
// app.delete('/migrations/:id', APIcontrollers._migrations_Delete_); //Delete

// //__Notifications CRUD__
// app.get('/notifications/:id', APIcontrollers._notifications_Read_); //Read
// app.post('/notifications', APIcontrollers._notifications_Creat_); //Creat
// app.put('/notifications', APIcontrollers._notifications_Update_); //Update
// app.delete('/notifications/:id', APIcontrollers._notifications_Delete_); //Delete

// //__Order_states CRUD__
// app.get('/order_states/:id', APIcontrollers._order_states_Read_); //Read
// app.post('/order_states', APIcontrollers._order_states_Creat_); //Creat
// app.put('/order_states', APIcontrollers._order_states_Update_); //Update
// app.delete('/order_states/:id', APIcontrollers._order_states_Delete_); //Delete

// //__Orderdealer CRUD__
// app.get('/orderdealer/:id', APIcontrollers._orderdealer_Read_); //Read
// app.post('/orderdealer', APIcontrollers._orderdealer_Creat_); //Creat
// app.put('/orderdealer', APIcontrollers._orderdealer_Update_); //Update
// app.delete('/orderdealer/:id', APIcontrollers._orderdealer_Delete_); //Delete

// //__Orders CRUD__
// app.get('/orders/:id', APIcontrollers._orders_Read_); //Read
// app.post('/orders', APIcontrollers._orders_Creat_); //Creat
// app.put('/orders', APIcontrollers._orders_Update_); //Update
// app.delete('/orders/:id', APIcontrollers._orders_Delete_); //Delete

// //__Orders_shops CRUD__
// app.get('/orders_shops/:id', APIcontrollers._orders_shops_Read_); //Read
// app.post('/orders_shops', APIcontrollers._orders_shops_Creat_); //Creat
// app.put('/orders_shops', APIcontrollers._orders_shops_Update_); //Update
// app.delete('/orders_shops/:id', APIcontrollers._orders_shops_Delete_); //Delete

// //__Ordersprpductlists CRUD__
// app.get('/ordersprpductlists/:id', APIcontrollers._ordersprpductlists_Read_); //Read
// app.post('/ordersprpductlists', APIcontrollers._ordersprpductlists_Creat_); //Creat
// app.put('/ordersprpductlists', APIcontrollers._ordersprpductlists_Update_); //Update
// app.delete('/ordersprpductlists/:id', APIcontrollers._ordersprpductlists_Delete_); //Delete

// //__Pages CRUD__
// app.get('/pages/:id', APIcontrollers._pages_Read_); //Read
// app.post('/pages', APIcontrollers._pages_Creat_); //Creat
// app.put('/pages', APIcontrollers._pages_Update_); //Update
// app.delete('/pages/:id', APIcontrollers._pages_Delete_); //Delete

// //__Password_resets CRUD__
// app.get('/password_resets/:id', APIcontrollers._password_resets_Read_); //Read
// app.post('/password_resets', APIcontrollers._password_resets_Creat_); //Creat
// app.put('/password_resets', APIcontrollers._password_resets_Update_); //Update
// app.delete('/password_resets/:id', APIcontrollers._password_resets_Delete_); //Delete

// //__Permission_role CRUD__
// app.get('/permission_role/:id', APIcontrollers._permission_role_Read_); //Read
// app.post('/permission_role', APIcontrollers._permission_role_Creat_); //Creat
// app.put('/permission_role', APIcontrollers._permission_role_Update_); //Update
// app.delete('/permission_role/:id', APIcontrollers._permission_role_Delete_); //Delete

// //__Permissions CRUD__
// app.get('/permissions/:id', APIcontrollers._permissions_Read_); //Read
// app.post('/permissions', APIcontrollers._permissions_Creat_); //Creat
// app.put('/permissions', APIcontrollers._permissions_Update_); //Update
// app.delete('/permissions/:id', APIcontrollers._permissions_Delete_); //Delete

// //__Posts CRUD__
// app.get('/posts/:id', APIcontrollers._posts_Read_); //Read
// app.post('/posts', APIcontrollers._posts_Creat_); //Creat
// app.put('/posts', APIcontrollers._posts_Update_); //Update
// app.delete('/posts/:id', APIcontrollers._posts_Delete_); //Delete

// //__Productcomments CRUD__
// app.get('/productcomments/:id', APIcontrollers._productcomments_Read_); //Read
// app.post('/productcomments', APIcontrollers._productcomments_Creat_); //Creat
// app.put('/productcomments', APIcontrollers._productcomments_Update_); //Update
// app.delete('/productcomments/:id', APIcontrollers._productcomments_Delete_); //Delete

// //__Products CRUD__
// app.get('/products/:id', APIcontrollers._products_Read_); //Read
// app.post('/products', APIcontrollers._products_Creat_); //Creat
// app.put('/products', APIcontrollers._products_Update_); //Update
// app.delete('/products/:id', APIcontrollers._products_Delete_); //Delete

// //__Productstemplets CRUD__
// app.get('/productstemplets/:id', APIcontrollers._productstemplets_Read_); //Read
// app.post('/productstemplets', APIcontrollers._productstemplets_Creat_); //Creat
// app.put('/productstemplets', APIcontrollers._productstemplets_Update_); //Update
// app.delete('/productstemplets/:id', APIcontrollers._productstemplets_Delete_); //Delete

// //__Roles CRUD__
// app.get('/roles/:id', APIcontrollers._roles_Read_); //Read
// app.post('/roles', APIcontrollers._roles_Creat_); //Creat
// app.put('/roles', APIcontrollers._roles_Update_); //Update
// app.delete('/roles/:id', APIcontrollers._roles_Delete_); //Delete

// //__Schedule CRUD__
// app.get('/schedule/:id', APIcontrollers._schedule_Read_); //Read
// app.post('/schedule', APIcontrollers._schedule_Creat_); //Creat
// app.put('/schedule', APIcontrollers._schedule_Update_); //Update
// app.delete('/schedule/:id', APIcontrollers._schedule_Delete_); //Delete

// //__Settings CRUD__
// app.get('/settings/:id', APIcontrollers._settings_Read_); //Read
// app.post('/settings', APIcontrollers._settings_Creat_); //Creat
// app.put('/settings', APIcontrollers._settings_Update_); //Update
// app.delete('/settings/:id', APIcontrollers._settings_Delete_); //Delete

// //__Shops CRUD__
// app.get('/shops/:id', APIcontrollers._shops_Read_); //Read
// app.post('/shops', APIcontrollers._shops_Creat_); //Creat
// app.put('/shops', APIcontrollers._shops_Update_); //Update
// app.delete('/shops/:id', APIcontrollers._shops_Delete_); //Delete

// //__Special_offers CRUD__
// app.get('/special_offers/:id', APIcontrollers._special_offers_Read_); //Read
// app.post('/special_offers', APIcontrollers._special_offers_Creat_); //Creat
// app.put('/special_offers', APIcontrollers._special_offers_Update_); //Update
// app.delete('/special_offers/:id', APIcontrollers._special_offers_Delete_); //Delete

// //__Subscription_packages CRUD__
// app.get('/subscription_packages/:id', APIcontrollers._subscription_packages_Read_); //Read
// app.post(
//   '/subscription_packages',
//   APIcontrollers._subscription_packages_Creat_,
// ); //Creat
// app.put(
//   '/subscription_packages',
//   APIcontrollers._subscription_packages_Update_,
// ); //Update
// app.delete(
//   '/subscription_packages/:id',
//   APIcontrollers._subscription_packages_Delete_,
// ); //Delete

// //__Summaries CRUD__
// app.get('/summaries/:id', APIcontrollers._summaries_Read_); //Read
// app.post('/summaries', APIcontrollers._summaries_Creat_); //Creat
// app.put('/summaries', APIcontrollers._summaries_Update_); //Update
// app.delete('/summaries/:id', APIcontrollers._summaries_Delete_); //Delete

// //__Transactions CRUD__
// app.get('/transactions/:id', APIcontrollers._transactions_Read_); //Read
// app.post('/transactions', APIcontrollers._transactions_Creat_); //Creat
// app.put('/transactions', APIcontrollers._transactions_Update_); //Update
// app.delete('/transactions/:id', APIcontrollers._transactions_Delete_); //Delete

// //__Translations CRUD__
// app.get('/translations/:id', APIcontrollers._translations_Read_); //Read
// app.post('/translations', APIcontrollers._translations_Creat_); //Creat
// app.put('/translations', APIcontrollers._translations_Update_); //Update
// app.delete('/translations/:id', APIcontrollers._translations_Delete_); //Delete

// //__Units CRUD__
// app.get('/units/:id', APIcontrollers._units_Read_); //Read
// app.post('/units', APIcontrollers._units_Creat_); //Creat
// app.put('/units', APIcontrollers._units_Update_); //Update
// app.delete('/units/:id', APIcontrollers._units_Delete_); //Delete

// //__User_product_favs CRUD__
// app.get('/user_product_favs/:id', APIcontrollers._user_product_favs_Read_); //Read
// app.post('/user_product_favs', APIcontrollers._user_product_favs_Creat_); //Creat
// app.put('/user_product_favs', APIcontrollers._user_product_favs_Update_); //Update
// app.delete('/user_product_favs/:id', APIcontrollers._user_product_favs_Delete_); //Delete

// //__User_roles CRUD__
// app.get('/user_roles/:id', APIcontrollers._user_roles_Read_); //Read
// app.post('/user_roles', APIcontrollers._user_roles_Creat_); //Creat
// app.put('/user_roles', APIcontrollers._user_roles_Update_); //Update
// app.delete('/user_roles/:id', APIcontrollers._user_roles_Delete_); //Delete

// //__Users CRUD__
// app.get('/users/:id', APIcontrollers._users_Read_); //Read
// app.post('/users', APIcontrollers._users_Creat_); //Creat
// app.put('/users', APIcontrollers._users_Update_); //Update
// app.delete('/users/:id', APIcontrollers._users_Delete_); //Delete
