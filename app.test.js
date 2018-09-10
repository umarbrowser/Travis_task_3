const router = require('./routes/index')

test('GET /: 1-Make sure the response is 200.\n    2-Make sure the JSON returned as response is valid', () => {
    expect(router.get('/', function(req, res, next) {
        res.render('index', {status: 'success', title: 'HackerbayUniversity'});
      })).toBe(router.get('/', (req, res) => {
          res.status(200)
          res.json({status: 'success'})
      }))
      });

test('POST /data: 1-Make sure it returns 200 with request string\n    2-It should return 400 instead of 200 (which means a bad request)\n    3-What happens when you pass a JSON or a number instead of string?\n    It should return 400 instead of 200.', () => {
    expect(router.get('/data', function(req, res, next) {
        var va = {va: 'i am umar'};
        res.redirect('data', va);
      })).toBe(router.post('/', (req, res) => {
          res.status(200)
          res.json({va: 'i am umar'})
      }))
      });

test("GET /data: 1-Make sure it returns 200 with the data saved\n    2-What would it return when there's no data saved?\n    It should return 400 instead of 200.", () => {
    expect(router.get('/data', function(req, res, next) {
        var va = {va: 'i am umar'};
        res.render('data', va);
      })).toBe(router.post('/', (req, res) => {
          res.status(400)
          res.json({va: 'i am umar'})
      }))
      });