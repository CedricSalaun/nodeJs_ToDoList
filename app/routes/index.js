const router = require('express').Router();

router.get('/', (request, response, next)=>{
    response.render('task/pages/index', {
        title: 'Le titre',
        task: {
            title: 'le title',
            resume: 'le resumé',
            status: 'le statut'
        }
    });
});
router.get('/create', (rq, rs, nx)=>{
    rs.render('task/pages/create');
});

router.post('/create/task', (rq, rs ,nx)=>{
    rs.render('task/pages/index', {
        title: 'Le titre',
        task: {
            title: 'le title',
            resume: 'le resumé',
            status: 'le statut'
        }
    });
});

module.exports = router;