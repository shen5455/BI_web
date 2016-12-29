// require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
const Home = resolve => {
    require.ensure(['./views/index.vue'], () => {
        resolve(require('./views/index.vue'));
    });
};

const List = resolve => {
    require.ensure(['./views/list.vue'], () => {
        resolve(require('./views/list.vue'));
    });
};

const P1 = resolve => {
    require.ensure(['./views/page1.vue'], () => {
        resolve(require('./views/page1.vue'));
    });
};

const P2 = resolve => {
    require.ensure(['./views/page2.vue'], () => {
        resolve(require('./views/page2.vue'));
    });
};

const P3 = resolve => {
    require.ensure(['./views/page3.vue'], () => {
        resolve(require('./views/page3.vue'));
    });
};

const P4 = resolve => {
    require.ensure(['./views/page4.vue'], () => {
        resolve(require('./views/page4.vue'));
    });
};

const P5 = resolve => {
    require.ensure(['./views/page5.vue'], () => {
        resolve(require('./views/page5.vue'));
    });
};

const P6 = resolve => {
    require.ensure(['./views/page6.vue'], () => {
        resolve(require('./views/page6.vue'));
    });
};

const routers = [{
    path: '/home',
    name: 'home',
    component: Home
}, {
    path: '/cnodevue',
    name: 'cnodevue',
    component: Home
}, {
    path: '/list',
    name: 'list',
    component: List
}, {
    path: '/topic/:id',
    name: 'topic',
    component(resolve) {
        require.ensure(['./views/topic.vue'], () => {
            resolve(require('./views/topic.vue'));
        });
    }
}, {
    path: '/add',
    name: 'add',
    component(resolve) {
        require.ensure(['./views/new.vue'], () => {
            resolve(require('./views/new.vue'));
        });
    },
    meta: { requiresAuth: true }
}, {
    path: '/message',
    name: 'message',
    component(resolve) {
        require.ensure(['./views/message.vue'], () => {
            resolve(require('./views/message.vue'));
        });
    },
    meta: { requiresAuth: true }
}, {
    path: '/user/:loginname',
    name: 'user',
    component(resolve) {
        require.ensure(['./views/user.vue'], () => {
            resolve(require('./views/user.vue'));
        });
    }
}, {
    path: '/about',
    name: 'about',
    component(resolve) {
        require.ensure(['./views/about.vue'], () => {
            resolve(require('./views/about.vue'));
        });
    }
}, {
    path: '/login',
    name: 'login',
    component(resolve) {
        require.ensure(['./views/login.vue'], () => {
            resolve(require('./views/login.vue'));
        });
    }
}, {
    path: '/p1',
    name: 'p1',
    component: P1
}, {
    path: '/p2',
    name: 'p2',
    component: P2
}, {
    path: '/p3',
    name: 'p3',
    component: P3
}, {
    path: '/p4',
    name: 'p4',
    component: P4
}, {
    path: '/p5',
    name: 'p5',
    component: P5
}, {
    path: '/p6',
    name: 'p6',
    component: P6
}, {
    path: '*',
    component: Home
}];

export default routers;