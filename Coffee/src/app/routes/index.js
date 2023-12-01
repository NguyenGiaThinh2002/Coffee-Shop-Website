const newsLogin = require('./LoginRoute');
const authRoute = require('./authRoute');
const admin = require('./adminRoute');
const product = require('./ProductsRoute');
const user = require('./UserRoute');
const orderDetail = require('./OrderDetailRoute');
const order = require('./OrderRoute')
function route(app){

    // app.use('/login', newsLogin);
    // app.use('/', newsRegister);
    app.use('/auth', authRoute);
    app.use('/login', newsLogin);

    app.use('/admin', admin);
    
    app.use('/product', product);
    app.use('/user', user);
    
    app.use('/orderDetail',orderDetail);
    app.use('/order', order);
}

module.exports = route;