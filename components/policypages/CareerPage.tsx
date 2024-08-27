import React, { useState } from 'react';

const CareerPage: React.FC = () => {
  const [hovered, setHovered] = useState<{ [key: string]: boolean }>({});

  const handleMouseEnter = (key: string) => {
    setHovered((prev) => ({ ...prev, [key]: true }));
  };

  const handleMouseLeave = (key: string) => {
    setHovered((prev) => ({ ...prev, [key]: false }));
  };

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      animation: 'fadeIn 2s ease-in-out',
    },
    header: {
      textAlign: 'center' as const,
      padding: '20px',
      animation: 'fadeInDown 1s ease-in-out',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#2D293E',
    },
    subtitle: {
      fontSize: '1.2rem',
      color: '#2D293E',
      marginTop: '10px',
    },
    headerImage: {
      width: '100%',
      height: '300px',
      backgroundColor: '#E6E6E6',
      marginTop: '20px',
      backgroundImage: 'url(/path-to-header-image.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      animation: 'zoomIn 1s ease-in-out',
    },
    overview: {
      padding: '20px',
      animation: 'fadeIn 1.5s ease-in-out',
    },
    sectionTitle: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      color: '#2D293E',
      marginTop: '20px',
    },
    description: {
      fontSize: '1rem',
      color: '#2D293E',
      marginTop: '10px',
    },
    positionCard: {
      backgroundColor: '#F9F9F9',
      padding: '20px',
      marginTop: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease-in-out',
      cursor: 'pointer',
    },
    positionCardHovered: {
      transform: 'translateY(-10px)',
    },
    positionTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#2D293E',
    },
    list: {
      fontSize: '1rem',
      color: '#2D293E',
      marginTop: '10px',
    },
    qualificationsTitle: {
      fontWeight: 'bold',
      marginTop: '10px',
    },
    imagePlaceholder: {
      width: '100%',
      height: '200px',
      backgroundColor: '#E6E6E6',
      marginTop: '20px',
      transition: 'transform 0.3s ease-in-out',
      backgroundImage: 'url(/path-to-image.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    imagePlaceholderHovered: {
      transform: 'scale(1.05)',
    },
  };

  const positions = [
    {
      key: 'adOps',
      title: 'Ad Ops Specialist (5 Openings)',
      responsibilities: [
        'Set up, manage, and optimize ad campaigns.',
        'Analyze performance data to maximize revenue.',
        'Collaborate with clients to understand their needs and provide solutions.',
        'Troubleshoot technical issues and provide timely resolutions.',
      ],
      qualifications: [
        '2+ years of experience in ad operations or a related field.',
        'Strong analytical skills and attention to detail.',
        'Familiarity with ad servers and platforms such as Google Ad Manager.',
      ],
    },
    {
      key: 'adPerformanceManager',
      title: 'Ad Performance Manager (1 Opening)',
      responsibilities: [
        'Monitor and analyze ad performance data.',
        'Develop strategies to optimize campaign effectiveness.',
        'Report on key performance metrics and provide actionable insights.',
      ],
      qualifications: [
        '3+ years of experience in digital advertising or ad performance management.',
        'Strong analytical skills and a data-driven mindset.',
        'Excellent communication and presentation skills.',
      ],
    },
    {
      key: 'hrManager',
      title: 'HR Manager (1 Opening)',
      responsibilities: [
        'Develop and implement HR policies and procedures.',
        'Manage recruitment, onboarding, and employee development programs.',
        'Handle employee relations and ensure compliance with labor laws.',
      ],
      qualifications: [
        '5+ years of experience in HR management.',
        'Strong leadership and communication skills.',
        'Bachelor\'s degree in Human Resources or related field.',
      ],
    },
    {
      key: 'technicalRecruiter',
      title: 'HR - Technical Recruiter (2 Openings)',
      responsibilities: [
        'Source and attract candidates through various channels.',
        'Screen resumes and conduct interviews.',
        'Coordinate with hiring managers to determine position requirements.',
      ],
      qualifications: [
        '2+ years of experience in technical recruiting.',
        'Strong understanding of technical roles and skills.',
        'Excellent communication and organizational skills.',
      ],
    },
    {
      key: 'digitalMarketingSpecialist',
      title: 'Digital Marketing Specialist (1 Opening)',
      responsibilities: [
        'Develop and implement digital marketing campaigns.',
        'Monitor and analyze campaign performance.',
        'Optimize strategies to increase engagement and conversion rates.',
      ],
      qualifications: [
        '3+ years of experience in digital marketing.',
        'Strong knowledge of SEO, SEM, and social media marketing.',
        'Excellent analytical and creative skills.',
      ],
    },
    {
      key: 'seoSpecialist',
      title: 'SEO Specialist (2 Openings)',
      responsibilities: [
        'Perform keyword research and competitive analysis.',
        'Optimize website content and metadata for SEO.',
        'Monitor SEO performance and provide recommendations for improvement.',
      ],
      qualifications: [
        '2+ years of experience in SEO.',
        'Strong understanding of SEO tools and best practices.',
        'Excellent analytical and problem-solving skills.',
      ],
    },
    {
      key: 'contentWriter',
      title: 'Content Writer (2 Openings)',
      responsibilities: [
        'Write, edit, and proofread content for various platforms.',
        'Conduct research to ensure content accuracy and relevance.',
        'Collaborate with the marketing team to develop content strategies.',
      ],
      qualifications: [
        '2+ years of experience in content writing or journalism.',
        'Excellent writing, editing, and research skills.',
        'Strong attention to detail and creativity.',
      ],
    },
    {
      key: 'copywriter',
      title: 'Copywriter (1 Opening)',
      responsibilities: [
        'Write clear, persuasive copy for various marketing materials.',
        'Collaborate with designers and marketers to develop creative concepts.',
        'Edit and proofread copy to ensure quality and consistency.',
      ],
      qualifications: [
        '3+ years of experience in copywriting.',
        'Strong portfolio of previous work.',
        'Excellent writing and editing skills.',
      ],
    },
    {
      key: 'socialMediaManager',
      title: 'Social Media Manager (1 Opening)',
      responsibilities: [
        'Develop and implement social media strategies.',
        'Create and curate engaging content for social media channels.',
        'Monitor social media trends and report on performance metrics.',
      ],
      qualifications: [
        '3+ years of experience in social media management.',
        'Strong understanding of social media platforms and trends.',
        'Excellent communication and creative skills.',
      ],
    },
    {
      key: 'contentMarketer',
      title: 'Content Marketer (1 Opening)',
      responsibilities: [
        'Develop and implement content marketing strategies.',
        'Create and manage a content calendar.',
        'Analyze content performance and optimize strategies.',
      ],
      qualifications: [
        '3+ years of experience in content marketing.',
        'Strong writing and editing skills.',
        'Experience with content management systems (CMS) and SEO.',
      ],
    },
    {
      key: 'inventoryManager',
      title: 'Inventory Manager (5 Openings)',
      responsibilities: [
        'Manage and optimize ad inventory.',
        'Monitor inventory performance and provide recommendations.',
        'Collaborate with the Ad Ops team to ensure effective ad placements.',
      ],
      qualifications: [
        '2+ years of experience in inventory management or a related field.',
        'Strong analytical and organizational skills.',
        'Familiarity with ad servers and platforms.',
      ],
    },
    {
      key: 'customerSupport',
      title: 'Customer Support (10 Openings)',
      responsibilities: [
        'Provide support to clients via phone, email, and chat.',
        'Troubleshoot and resolve customer issues.',
        'Maintain accurate records of customer interactions.',
      ],
      qualifications: [
        '1+ years of experience in customer support or a related field.',
        'Excellent communication and problem-solving skills.',
        'Strong ability to handle multiple tasks and prioritize effectively.',
      ],
    },
  ];

  return (
    <div style={styles.container}>
      <section style={styles.overview}>
        <p style={styles.description}>
          At AirItLive, we are passionate about innovation and excellence in the ad tech industry. Our team is dedicated to transforming digital content into thriving revenue streams, and we are always on the lookout for talented individuals who share our vision. If you're driven, innovative, and eager to make an impact, we invite you to explore our career opportunities and join us on our journey to redefine ad monetization.
        </p>
      </section>

      <section>
        <h1 style={styles.sectionTitle}>Current Openings</h1>

        {positions.map((position) => (
          <div
            key={position.key}
            style={{
              ...styles.positionCard,
              ...(hovered[position.key] && styles.positionCardHovered),
            }}
            onMouseEnter={() => handleMouseEnter(position.key)}
            onMouseLeave={() => handleMouseLeave(position.key)}
          >
            <h3 style={styles.positionTitle}>{position.title}</h3>
            <div
              style={{
                ...styles.imagePlaceholder,
                ...(hovered[position.key] && styles.imagePlaceholderHovered),
              }}
            ></div>
            <ul style={styles.list}>
              {position.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
            <p style={styles.qualificationsTitle}>Qualifications:</p>
            <ul style={styles.list}>
              {position.qualifications.map((qualification, index) => (
                <li key={index}>{qualification}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section style={styles.overview}>
        <h2 style={styles.sectionTitle}>Why Join AirItLive?</h2>
        <p style={styles.description}>
          At AirItLive, we offer a dynamic, fast-paced work environment where innovation is encouraged, and excellence is rewarded. Our team is made up of talented professionals who are passionate about what they do. We provide competitive salaries, comprehensive benefits, and opportunities for professional growth and development.
        </p>
        <div
          style={{
            ...styles.imagePlaceholder,
            ...(hovered['companyCulture'] && styles.imagePlaceholderHovered),
          }}
          onMouseEnter={() => handleMouseEnter('companyCulture')}
          onMouseLeave={() => handleMouseLeave('companyCulture')}
        ></div> {/* Placeholder for company culture or team image */}
      </section>

      <section style={styles.overview}>
        <h2 style={styles.sectionTitle}>Ready to Make an Impact?</h2>
        <p style={styles.description}>
          If you’re interested in joining our team and contributing to our mission, we’d love to hear from you! Explore our open positions and apply today by sending your resume and cover letter to <strong>careers@airitlive.com</strong>.
        </p>
      </section>
    </div>
  );
};

export default CareerPage;
