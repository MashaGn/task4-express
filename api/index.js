module.exports = x => {
  const rtr = x.Router();
  rtr
    .route('/add/:n1/:n2')
    .get((req, res) => {
      const { n1, n2 } = req.params;
      result = Number(n1)+Number(n2);
      res.send('Сумма:' + result);
    })
    .post((req, res) => {
      const { n1, n2 } = req.params;
      result = Number(n1)+Number(n2);
      res.json({result})
    })
rtr
  .route('/mpy/:n1/:n2')
  .get((req, res) => {
    const { n1, n2 } = req.params;
    result = Number(n1)*Number(n2);
    res.send('Произведение:' + result);
  })
  .post((req, res) => {
    const { n1, n2 } = req.params;
    result = Number(n1)*Number(n2);
    res.json({result})
  })
  return rtr;
}
