import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { transporter, mailOptions } from '../../lib/mailer';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, phoneNumber, emailAddress, password, currentJobTitle, companyName, experience, expertise, linkedin, yourWhy, commitment } = req.body;
    
    try {
        // console.log(req.body);

      // Basic validation
      if (!firstName || !lastName || !phoneNumber || !emailAddress || !password || !currentJobTitle || !companyName || !experience || !expertise || !linkedin || !yourWhy || !commitment) {
        return res.status(400).json({ error: 'All fields are required.' });
      }
        
       // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

      // Save to database
        const user = await prisma.mentor.create({
      data: {
        firstName,
        lastName,
        phoneNumber,
        emailAddress,
        password: hashedPassword,
        currentJobTitle,
        companyName,
        experience,
        expertise,
        linkedin,
        yourWhy,
        commitment
      },
    });

      // Send email
    await transporter.sendMail({
      ...mailOptions,
      to: `${emailAddress}`,
      subject: 'Welcome to Samic Tech Hub!',
      html: `<p>Hi ${firstName},</p>
      <p>Thanks for registering to be a Mentor at Samic Tech Hub.</p>
      <p>We will contact you soon on the status of your Application</p>`,
    //   <button className='border'>Proceed to Payment</button>
    });

      return res.status(201).json({ message: 'Successful! A mail has been sent.', user });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Something went wrong.' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
}
