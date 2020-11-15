module.exports = {
    PingHandler: (req, res) => {
        res.json({
            message: 'Pong',
        });
    },

    MigrateHandler: async (req, res, next) => {
        const User = require('../model/User');
        const Language = require('../model/Language');
        const Course = require('../model/Course');
        const bcrypt = require('bcrypt');

        try {
            await User.deleteMany({});
            await User.insertMany([
                {
                    fullName: 'Akbarsn',
                    email: 'akbarsn@gmail.com',
                    username: 'akbarsn',
                    password: await bcrypt.hash('123', 12),
                },
                {
                    fullName: 'Ucup',
                    email: 'yusuf@gmail.com',
                    username: 'yusuf',
                    password: '123',
                },
                {
                    fullName: 'Safira',
                    email: 'safira@gmail.com',
                    username: 'safira',
                    password: '123',
                },
                {
                    fullName: 'Sasi',
                    email: 'sasi@gmail.com',
                    username: 'sasi',
                    password: '123',
                },
                {
                    fullName: 'johndoe',
                    email: 'johndoe@gmail.com',
                    username: 'john',
                    password: await bcrypt.hash('123', 12),
                },
            ]);

            await Language.deleteMany({});
            await Language.insertMany([
                {
                    name: 'Jawa',
                },
                {
                    name: 'Sunda',
                },
                {
                    name: 'Madura',
                },
            ]);

            await Course.deleteMany({});
            await Course.insertMany([
                {
                    title: 'Grammar',
                    language: 'Jawa',
                    mentor: 'Mr. Joko',
                    duration: 30,
                    userJoined: 1,
                    topics: [
                        {
                            id: 1,
                            title: 'Test One',
                            content:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                            videoURI:
                                'https://www.youtube.com/embed/0jZNKV5ROBM',
                        },
                        {
                            id: 2,
                            title: 'Test One',
                            content:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                            videoURI:
                                'https://www.youtube.com/embed/0jZNKV5ROBM',
                        },
                        {
                            id: 3,
                            title: 'Test One',
                            content:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                            videoURI:
                                'https://www.youtube.com/embed/0jZNKV5ROBM',
                        },
                        {
                            id: 4,
                            title: 'Test One',
                            content:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                            videoURI:
                                'https://www.youtube.com/embed/0jZNKV5ROBM',
                        },
                    ],
                    createdAt: Date.now(),
                    updatedAt: Date.now(),
                },
                {
                    title: 'Grammar',
                    language: 'Jawa',
                    mentor: 'Mr. Joko',
                    duration: 30,
                    userJoined: 1,
                    topics: [
                        {
                            id: 1,
                            title: 'Test One',
                            content:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                            videoURI:
                                'https://www.youtube.com/embed/0jZNKV5ROBM',
                        },
                        {
                            id: 2,
                            title: 'Test One',
                            content:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                            videoURI:
                                'https://www.youtube.com/embed/0jZNKV5ROBM',
                        },
                        {
                            id: 3,
                            title: 'Test One',
                            content:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                            videoURI:
                                'https://www.youtube.com/embed/0jZNKV5ROBM',
                        },
                        {
                            id: 4,
                            title: 'Test One',
                            content:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                            videoURI:
                                'https://www.youtube.com/embed/0jZNKV5ROBM',
                        },
                    ],
                    createdAt: Date.now(),
                    updatedAt: Date.now(),
                },
                {
                    title: 'Grammar',
                    language: 'Sunda',
                    mentor: 'Mr. Joko',
                    duration: 30,
                    userJoined: 1,
                    topics: [
                        {
                            id: 1,
                            title: 'Test One',
                            content:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                            videoURI:
                                'https://www.youtube.com/embed/0jZNKV5ROBM',
                        },
                        {
                            id: 2,
                            title: 'Test One',
                            content:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                            videoURI:
                                'https://www.youtube.com/embed/0jZNKV5ROBM',
                        },
                        {
                            id: 3,
                            title: 'Test One',
                            content:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                            videoURI:
                                'https://www.youtube.com/embed/0jZNKV5ROBM',
                        },
                        {
                            id: 4,
                            title: 'Test One',
                            content:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                            videoURI:
                                'https://www.youtube.com/embed/0jZNKV5ROBM',
                        },
                    ],
                    createdAt: Date.now(),
                    updatedAt: Date.now(),
                },
                {
                    title: 'Grammar',
                    language: 'Sunda',
                    mentor: 'Mr. Joko',
                    duration: 30,
                    userJoined: 1,
                    topics: [
                        {
                            id: 1,
                            title: 'Test One',
                            content:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                            videoURI:
                                'https://www.youtube.com/embed/0jZNKV5ROBM',
                        },
                        {
                            id: 2,
                            title: 'Test One',
                            content:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                            videoURI:
                                'https://www.youtube.com/embed/0jZNKV5ROBM',
                        },
                        {
                            id: 3,
                            title: 'Test One',
                            content:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                            videoURI:
                                'https://www.youtube.com/embed/0jZNKV5ROBM',
                        },
                        {
                            id: 4,
                            title: 'Test One',
                            content:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                            videoURI:
                                'https://www.youtube.com/embed/0jZNKV5ROBM',
                        },
                    ],
                    createdAt: Date.now(),
                    updatedAt: Date.now(),
                },
            ]);
            res.send('Migrate Completed');
        } catch (error) {
            next(error);
        }
    },
};
