// import * as express from 'express';
// import * as stripeLoader from 'stripe';

// const router = express.Router();

// const stripe = new stripeLoader('sk_test_20MQcHKiDiettG9cfMdTDcRM00h29hfI4A');

// const charge = (token: string, amt: number) => {
//     return stripe.charges.create({
//         amount: amt * 100,
//         currency: 'usd',
//         source: token,
//         description: 'Statement Description'
//     })
// }

// router.post('/api/donate', async (req, res, next) => {
//     try {
//         let data = await charge(req.body.token.id, req.body.amount);
//         console.log(data)
//         res.send("Charged")
//     } catch(e) {
//         console.log(e);
//         res.status(500);
//     }
// })

// export default router;