import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

// Styled Accordion
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
  marginBottom: theme.spacing(2),
  backgroundColor: '#ffffff',
  '&:hover': {
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.12)',
  },
}));

// Styled Summary
const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1.5rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  // backgroundColor: '#e3f2fd',
  flexDirection: 'row-reverse',
  padding: theme.spacing(2),
  fontWeight: 'bold',
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]: {
    transform: 'rotate(90deg)',
  },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
}));

// Styled Details
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: '#f9f9f9',
  fontSize: '1rem',
  fontWeight: 500,
  color: '#333',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const faqs = [
    {
      id: 'panel1',
      question: 'What programs or courses do you offer?',
      answer:
        'We offer training in software development, product design (UI/UX), and digital marketing. Each program equips you with in-demand tech skills.',
    },
    {
      id: 'panel2',
      question: 'Do I need any prior experience to enroll?',
      answer:
        'No prior experience is needed. We have beginner-friendly courses and advanced options for learners with some background.',
    },
    {
      id: 'panel3',
      question: 'How long does the training last?',
      answer:
        'Training typically lasts 6 months. We offer full-time options.',
    },
    // {
    //   id: 'panel4',
    //   question: 'Do you provide job support after training?',
    //   answer:
    //     'Yes, we provide job support including CV reviews, portfolio help, interview prep, and access to job opportunities.',
    // },
    {
      id: 'panel5',
      question: 'Is the training online or in-person?',
      answer:
        'We offer physical classes.',
    },
    {
      id: 'panel6',
      question: 'What kind of jobs can I get after training?',
      answer:
        'You can apply for roles like software developer, UI/UX designer, digital marketer, product manager, or freelance tech roles.',
    },
    {
      id: 'panel7',
      question: 'Will I get a certificate?',
      answer:
        'Yes. You will receive a certificate of completion.',
    },
    {
      id: 'panel8',
      question: 'Are there payment plans or scholarships?',
      answer:
        'Yes, we offer flexible payment plans. Scholarships are also available to outstanding or underserved students.',
    },
    {
      id: 'panel9',
      question: 'Will I work on real-life projects?',
      answer:
        'Absolutely. Our training is hands-on and project-based, so you’ll build real apps, campaigns, or designs you can showcase.',
    },
    {
      id: 'panel10',
      question: 'How do I apply or register?',
      answer:
        'You can apply through our website or visit our center. Once you fill out a short form, we’ll guide you through the next steps.',
    },
  ];

  return (
    <div
      style={{
        maxWidth: 1200,
        margin: '40px auto',
        backgroundColor: '#F3F4F5',
        padding: '40px 24px',
        borderRadius: '16px',
      }}
    >
      <Typography
        variant="h2"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', marginBottom: 4 }}
      >
        Frequently Asked Questions
      </Typography>

      {faqs.map((faq) => (
        <Accordion
          key={faq.id}
          expanded={expanded === faq.id}
          onChange={handleChange(faq.id)}
        >
          <AccordionSummary
            aria-controls={`${faq.id}-content`}
            id={`${faq.id}-header`}
          >
            <Typography sx={{ fontSize: '1.7rem', fontWeight: 600 }}>
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontSize: '1.5rem', fontWeight: 300 }}>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
