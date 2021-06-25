import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'TutorOnline',
  description:
    'TutorOnline is a web application for teaching under-gradutes maths and orther science related course',
  keywords: 'Tutor, Online Teaching, Stundents, maths solving, maths,',
};

export default Meta;
