/* GET login page */
module.exports.login = function(req, res){
res.render('index', { title: 'Login' });
};

/* GET reference page */
module.exports.references = function(req, res){
res.render('index', { title: 'References' });
};

/* GET welcome page */
module.exports.welcome = function(req, res){
res.render('welcome', { title: 'Welcome' });
};