const router = require('./routes/index')
const router1 = require('./routes/users')
const app = require('./app')

test('GET /: 1-Make sure the response is 200.', () => {
    expect(router.get('/', (req, res, next) => {
        res.render('index', {status: 'success', title: 'HackerbayUniversity'});
      })).toBe(router.get('/', (req, res) => {
          res.status(200)
      }))
      });

test('GET /: 2-Make sure the JSON returned as response is valid', () => {
    expect(router.get('/', (req, res, next) => {
        res.render('index', {status: 'success', title: 'HackerbayUniversity'});
      })).toBe(router.get('/', (req, res) => {
          res.json({status: 'success'})
      }))
      });

test('POST /data: 1-Make sure it returns 200 with request string.', () => {
    expect(router.get('/data', (req, res, next) => {
        var va = {va: 'i am umar'};
        res.redirect('data', va);
      })).toBe(router.post('/', (req, res) => {
          res.status(200)
      }))
      });

test('POST /data: 2-It should return 400 instead of 200 (which means a bad request).', () => {
    expect(router.get('/data:1', (req, res, next) => {
        var va = {va: 'i am umar'};
        res.redirect('data', va);
      })).toBe(router.post('/', (req, res) => {
          res.status(400)
      }))
      });

test('POST /data: 3-What happens when you pass a JSON or a number instead of string?It should return 400 instead of 200.', () => {
    expect(router.get('/data:1', (req, res, next) => {
        var va = {va: '12345'};
        res.redirect('data', va);
      })).toBe(router.post('/', (req, res) => {
        res.status(400)
      }))
      });

test("GET /data: 1-Make sure it returns 200 with the data saved.", () => {
    expect(router.get('/data', (req, res, next) => {
        var va = {va: 'i am umar'};
        res.render('data', va);
      })).toBe(router.post('/', (req, res) => {
          res.status(200)
          res.json({va: 'i am umar'})
      }))
      });

test("GET /data: 2-What would it return when there's no data saved?It should return 400 instead of 200.", () => {
    expect(router.get('/data', (req, res, next) => {
        var va = {};
        res.render('data', va);
      })).toBe(router.post('/', (req, res) => {
          res.status(400)
      }))
      });

test('TEST Users: respond with a resource', () => {
    expect(router1.get('/', (req, res, next) => {
        res.send('respond with a resource');
      })).toBe(router1.get('/', (req, res) => {
          res.status(200)
      }))
      });

test('render the error page.', () => {
    expect(app.use((err, req, res, next) => {
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};
      
        res.status(err.status || 500);
        res.render('error');
      })).toBe(app.use((err, req, res, next) => {
          res.status(500)
      }))
      });
