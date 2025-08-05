export default async function handler(req, res) {
  const { amount, firstName, lastName, emailAddress } = req.body;

  const contractCode = process.env.MONNIFY_CONTRACT_CODE;
  const apiKey = process.env.MONNIFY_API_KEY;
  const secretKey = process.env.MONNIFY_SECRET_KEY;

  const base64Key = Buffer.from(`${apiKey}:${secretKey}`).toString('base64');

  const response = await fetch("https://sandbox.monnify.com/api/v1/merchant/transactions/init-transaction", {
    method: "POST",
    headers: {
      Authorization: `Basic ${base64Key}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      amount,
      customerName: `${firstName} ${lastName}`,
       customerEmail: emailAddress,
      paymentReference: `ref-${Date.now()}`,
      currencyCode: "NGN",
      contractCode,
      paymentDescription: "Test Payment",
      redirectUrl: "http://localhost:3000/paymentSuccess"
    })
  });

  const data = await response.json();
  res.status(200).json(data);
}
