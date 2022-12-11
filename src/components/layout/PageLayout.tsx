import React from 'react';
import styled from 'styled-components';

import HeaderSection from '../UI/organisms/HeaderSection';

const PageLayout = ({ children, pageTitle }: { children: React.ReactNode; pageTitle: string }) => {
  return (
    <PageLayoutWrapper>
      <header>
        <HeaderSection />
      </header>
      <section>
        <h2>{pageTitle}</h2>
        {children}
      </section>
    </PageLayoutWrapper>
  );
};

const PageLayoutWrapper = styled.section`
  max-width: 1024px;
  margin: 0 auto;
  padding-top: 120px;

  padding: 20xp;

  header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;

    max-width: 1024px;
    margin: 0 auto;
  }

  h2 {
    margin: 20px;
  }
`;

export default PageLayout;
