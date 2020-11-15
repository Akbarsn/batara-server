const UtilRoute = (app) => {
    const utilHandler = require('../handler/util');

    app.get('/ping', utilHandler.PingHandler);
    app.get('/migrate', utilHandler.MigrateHandler);
};

const AuthRoute = (app) => {
    const authHandler = require('../handler/auth');

    app.post('/auth/register', authHandler.RegisterHandler);
    app.post('/auth/login', authHandler.LoginHandler);
};

const HomeRoute = (app) => {
    const homeHandler = require('../handler/home');
    const { CheckToken } = require('../middleware/auth');

    app.get('/home/language', CheckToken, homeHandler.GetAllLanguage);
    app.get('/home/:language', CheckToken, homeHandler.GetHomePage);
    app.get(
        '/home/course/:language',
        CheckToken,
        homeHandler.GetAllCourse,
    );
    app.get(
        '/home/popular/:language',
        CheckToken,
        homeHandler.GetPopularCourse,
    );
    app.get(
        '/home/latest/:language',
        CheckToken,
        homeHandler.GetLatestCourse,
    );
};
module.exports = {
    InitRoute: (app) => {
        UtilRoute(app);
        AuthRoute(app);
        HomeRoute(app);
    },
};
