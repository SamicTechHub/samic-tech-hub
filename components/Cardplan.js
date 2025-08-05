import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary, { accordionSummaryClasses } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PaymentForm from './paymentForm'; // Adjust the import if needed

// Styled Components
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `2px solid #27beab`,
  borderRadius: 12,
  marginBottom: theme.spacing(3),
  backgroundColor: '#ffffff',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
  overflow: 'hidden',
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1.5rem', color: '#27beab' }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: 'row-reverse',
  padding: theme.spacing(3),
  backgroundColor: '#f7fdfa',
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]: {
    transform: 'rotate(90deg)',
  },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(2),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: '#fcfefd',
}));

const ReserveButton = styled(Button)({
  marginTop: '16px',
  backgroundColor: '#27beab',
  color: '#fff',
  fontSize: '1.5rem',
  padding: '10px 24px',
  borderRadius: '8px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#1ea293',
  },
});

const Backdrop = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backdropFilter: 'blur(5px)',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  zIndex: 2000, 
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start', 
  paddingTop: '120px', 
});

const ModalWrapper = styled('div')({
  padding: '4px',
  borderRadius: '12px',
  width: '90%',
  maxWidth: '600px',
  position: 'relative',
});


const CloseButton = styled(Button)({
  position: 'absolute',
  top: '26px',
  right: '16px',
  backgroundColor: '#f44336',
  color: '#fff',
  textTransform: 'none',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#d32f2f',
  },
});

export default function CardPlan() {
  const [expanded, setExpanded] = useState('panel1');
  const [showModal, setShowModal] = useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const openPaymentForm = () => setShowModal(true);
  const closePaymentForm = () => setShowModal(false);

  return (
    <div style={{ fontSize: '1.7rem' }}>
      {showModal && (
        <Backdrop>
          <ModalWrapper>
            <CloseButton onClick={closePaymentForm}>Cancel</CloseButton>
            <PaymentForm />
          </ModalWrapper>
        </Backdrop>
      )}

      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1-content" id="panel1-header">
          <Typography sx={{ fontSize: '1.7rem', fontWeight: 600 }}>Hot Desk: Shared Open Space</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: '1.7rem' }}>
            Ideal for freelancers, remote workers, or anyone needing occasional access.
            <br />
            <strong>Daily:</strong> ₦2,000 | <strong>Weekly:</strong> ₦10,000 | <strong>Monthly:</strong> ₦40,000
          </Typography>
          <ReserveButton onClick={openPaymentForm}>Reserve Plan</ReserveButton>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2-content" id="panel2-header">
          <Typography sx={{ fontSize: '1.7rem', fontWeight: 600 }}>Dedicated Desk: Your Own Spot</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: '1.7rem' }}>
            Your own fixed desk in a shared space.
            <br />
            <strong>Daily:</strong> ₦4,000 | <strong>Weekly:</strong> ₦20,000 | <strong>Monthly:</strong> ₦80,000
          </Typography>
          <ReserveButton onClick={openPaymentForm}>Reserve Plan</ReserveButton>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3-content" id="panel3-header">
          <Typography sx={{ fontSize: '1.7rem', fontWeight: 600 }}>Private Office / Team Desk</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: '1.7rem' }}>
            Ideal for early-stage companies needing an affordable, collaborative workspace.
            <br />
            <strong>Daily:</strong> ₦6,000 | <strong>Weekly:</strong> ₦30,000 | <strong>Monthly:</strong> ₦120,000
          </Typography>
          <ReserveButton onClick={openPaymentForm}>Reserve Plan</ReserveButton>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
