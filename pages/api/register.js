import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { transporter, mailOptions } from '../../lib/mailer';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, phoneNumber, emailAddress, password, preferredTrack } = req.body;
    
    try {
      // Basic validation
      if (!firstName || !lastName || !phoneNumber || !emailAddress || !password || !preferredTrack) {
        return res.status(400).json({ error: 'All fields are required.' });
      }
        // console.log('prrrrr', preferredTrack);

       // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

      // Save to database
        const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        phoneNumber,
        emailAddress,
        password: hashedPassword,
        preferredTrack,
      },
    });

      // Send email
    await transporter.sendMail({
      ...mailOptions,
      to: `${emailAddress}`,
      subject: 'Welcome to Samic Tech Hub!',
      html: `<p>Hi ${firstName},</p>
      <p>Thanks for registering at Samic Tech Hub.</p>
      <p>You can proceed to pay here</p>
      <button className='border'>Proceed to Payment</button>`,
    });

      return res.status(201).json({ message: 'User registered! A mail has been sent.', user });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Something went wrong.' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
}
