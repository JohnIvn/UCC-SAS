import Card from 'react-bootstrap/Card';

function Card1() {
  return (
    <>
      <div className="d-flex flex-wrap">
        {[
          { 
            variant: 'Primary', 
            title: 'Privacy Policy', 
            text: 'We value your privacy. Your personal data, including attendance records, is securely stored and used only for the purpose of managing attendance. We do not share your information with third parties without your consent.' 
          },
          { 
            variant: 'Secondary', 
            title: 'Terms of Service', 
            text: 'By using the attendance record system, you agree to abide by the system’s terms of use. This includes using the system solely for recording attendance and not misusing or altering data without authorization.' 
          },
          { 
            variant: 'Success', 
            title: 'Data Retention', 
            text: 'Your attendance data will be retained for a period of time defined by your organization’s retention policy. After this period, the data may be archived or deleted in accordance with applicable laws.' 
          },
          { 
            variant: 'Danger', 
            title: 'Security Measures', 
            text: 'We take your data security seriously. Our system employs encryption and secure access protocols to protect your attendance records from unauthorized access.' 
          },
          { 
            variant: 'Warning', 
            title: 'User Responsibilities', 
            text: 'As a user of the system, it is your responsibility to ensure the accuracy of the data you input. Any incorrect information may lead to discrepancies in the attendance records.' 
          },
          { 
            variant: 'Info', 
            title: 'System Usage', 
            text: 'The attendance system should be used exclusively for tracking attendance during official events, classes, and meetings. Unauthorized use may result in disciplinary actions.' 
          },
          { 
            variant: 'Light', 
            title: 'Account Security', 
            text: 'Make sure to keep your login credentials secure. If you suspect unauthorized access to your account, please change your password immediately and contact support.' 
          },
          { 
            variant: 'Dark', 
            title: 'Data Access', 
            text: 'Only authorized personnel are allowed to access or manage attendance data. You may request access to your personal attendance records upon request, subject to applicable policies.' 
          },
        ].map(({ variant, title, text }) => (
          <Card
            bg={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
            style={{ width: '18rem', margin: '10px' }}
            className="mb-2"
          >
            <Card.Header>Important Information</Card.Header>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{text}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Card1;