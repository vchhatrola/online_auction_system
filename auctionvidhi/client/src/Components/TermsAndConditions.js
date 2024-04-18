
import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '5px',
  };

  const headingStyle = {
    marginBottom: '20px',
  };

  const sectionStyle = {
    marginBottom: '15px',
  };

  const linkStyle = {
    marginRight: '10px',
    color: '#007bff',
    textDecoration: 'none',
  };

  // const linkHoverStyle = {
  //   textDecoration: 'underline',
  // };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Terms and Conditions</h2>
      <div style={{ marginBottom: '20px' }}>
        <p style={sectionStyle}><strong>1. Acceptance of Terms</strong><br />
          By accessing and using this Online Auction System (the "System"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, you should not use or access the System.</p>

        <p style={sectionStyle}><strong>2. Description of the System</strong><br />
          The System is an online auction platform designed for banks to sell seized assets such as vehicles and properties. The System allows banks to list, market, and auction seized assets to a broad audience of potential buyers, facilitating competitive bidding processes to maximize the recovery of funds.</p>

        <p style={sectionStyle}><strong>3. User Conduct</strong><br />
          As a user, you agree to use the System only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the System. You agree not to upload, distribute or transmit any computer viruses, worms, or any software intended to damage or alter a computer system or data.</p>

        <p style={sectionStyle}><strong>4. User Registration</strong><br />
          To use certain features of the System, you may need to register and provide certain information. You agree to provide accurate, current, and complete information during the registration process. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password.</p>

        <p style={sectionStyle}><strong>5. Intellectual Property</strong><br />
          All content included as part of the System, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the System, is the property of the System's operators or its suppliers and protected by copyright and other laws that protect intellectual property and proprietary rights.</p>

        <p style={sectionStyle}><strong>6. User Content</strong><br />
          You are responsible for any content, including text, images, and other materials, that you upload, post, or otherwise provide to the System ("User Content"). You grant the System's operators a non-exclusive, transferable, sub-licensable, royalty-free, worldwide license to use, copy, modify, create derivative works based on, distribute, publicly display, publicly perform, and otherwise exploit in any manner such User Content in all formats and distribution channels now known or hereafter devised (the "User Content License").</p>

        <p style={sectionStyle}><strong>7. Privacy Policy</strong><br />
          We respect your privacy and have a Privacy Policy that explains how we collect, use, and share your personal information. By using the System, you consent to the collection, use, and sharing of your personal information in accordance with our Privacy Policy.</p>

        <p style={sectionStyle}><strong>8. Security Measures</strong><br />
          We take reasonable measures to protect the security of your personal information. However, no method of transmission over the internet, or method of electronic storage, is 100% secure. Therefore, while we strive to protect your personal information, we cannot guarantee its absolute security.</p>

        <p style={sectionStyle}><strong>9. Disclaimer of Warranties</strong><br />
          The System is provided "as is" without any warranties, express or implied. The operators of the System make no representations or warranties in relation to the System or the information and materials provided on the System.</p>

        <p style={sectionStyle}><strong>10. Limitation of Liability</strong><br />
          The operators of the System will not be liable for any indirect, incidental, special, consequential or punitive damages, loss of profits or revenues, or loss of use, even if advised of the possibility of such damages.</p>

        <p style={sectionStyle}><strong>11. Governing Law</strong><br />
          These Terms and your use of the System are governed by and construed in accordance with the laws of the jurisdiction where the operators of the System are located.</p>

        <p style={sectionStyle}><strong>12. Changes to Terms</strong><br />
          The operators of the System reserve the right to modify these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

        <p style={sectionStyle}><strong>13. Contact Information</strong><br />
          If you have any questions about these Terms, please contact us at [your contact email].</p>
      </div>
      <div>
        <Link to="/" style={linkStyle}>Login page</Link><br/>
        <Link to="/signup" style={linkStyle}>Sign up</Link>
      </div>
    </div>
  );
};

export default TermsAndConditions;
