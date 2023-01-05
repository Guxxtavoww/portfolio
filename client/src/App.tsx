import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Navbar } from 'components';
import defaultTheme from 'styles/theme/default';
import GlobalStyles from 'styles/globalStyles';
import { About, Footer, Header, Skills, Testimonial, Work } from 'containers';

const App: React.FC = () => (
  <ThemeProvider theme={defaultTheme}>
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
      <GlobalStyles />
    </div>
  </ThemeProvider>
);

export default App;
