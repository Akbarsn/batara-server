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

const CourseRoute = (app) => {
    const courseHandler = require('../handler/course');
    const { CheckToken } = require('../middleware/auth');

    app.get(
        '/course/:id',
        CheckToken,
        courseHandler.GetCourseDetailByID,
    );

    app.get('/course/join/:id', CheckToken, courseHandler.JoinCourse);

    app.get(
        '/course/topic/:courseID/:topicID',
        CheckToken,
        courseHandler.GetTopicByID,
    );

    app.get(
        '/course/next/:courseID/:topicID',
        CheckToken,
        courseHandler.NextTopic,
    );

    app.get(
        '/course/exam/:courseID',
        CheckToken,
        courseHandler.TakeExam,
    );

    app.post(
        '/course/exam/:courseID',
        CheckToken,
        courseHandler.PostExam,
    );
};

const UserRoute = (app) => {
    const userHandler = require('../handler/user');
    const { CheckToken } = require('../middleware/auth');

    app.get('/user/', CheckToken, userHandler.GetProfile);

    app.get(
        '/user/ongoing',
        CheckToken,
        userHandler.GetOngoingCourse,
    );

    app.get(
        '/user/completed',
        CheckToken,
        userHandler.GetCompletedCourse,
    );

    app.get('/user/courses', CheckToken, userHandler.GetAllCourse);
};
module.exports = {
    InitRoute: (app) => {
        const {
            handleErrors,
            handleNotFound,
        } = require('../middleware/error');

        UtilRoute(app);
        AuthRoute(app);
        HomeRoute(app);
        CourseRoute(app);
        UserRoute(app);

        app.use(handleErrors);
        app.use(handleNotFound);
    },
};
