import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { reference } = req.query;

  const apiKey = process.env.MONNIFY_API_KEY;
  const secretKey = process.env.MONNIFY_SECRET_KEY;
  const base64Key = Buffer.from(`${apiKey}:${secretKey}`).toString("base64");

  const verifyUrl = `https://sandbox.monnify.com/api/v2/transactions/${reference}`;

  try {
    const response = await fetch(verifyUrl, {
      headers: {
        Authorization: `Basic ${base64Key}`,
      },
    });

    const result = await response.json();

    if (result.requestSuccessful) {
      const tx = result.response;

      // Save to database if not already saved
      const existing = await prisma.payment.findUnique({
        where: { paymentReference: tx.paymentReference },
      });

      if (!existing && tx.paymentStatus === "PAID") {
        await prisma.payment.create({
          data: {
            paymentReference: tx.paymentReference,
            amountPaid: parseFloat(tx.amountPaid),
            customerName: tx.customerName,
            customerEmail: tx.customerEmail,
            paidOn: new Date(tx.paidOn),
            userId: userId, 
          },
        });
      }

      res.status(200).json(tx);
    } else {
      res.status(400).json({ message: "Verification failed" });
    }
  } catch (error) {
    console.error("Verification error:", error);
    res.status(500).json({ message: "Server error verifying payment" });
  }
}
