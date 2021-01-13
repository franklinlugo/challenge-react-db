import * as React from 'react';
import { oneOfType, arrayOf, node } from 'prop-types';
import { Container } from './LayoutStyles';

function Layout({ children }) {
  return (
    <Container>
      <div className="box">{children}</div>
    </Container>
  );
}
Layout.propTypes = {
  children: oneOfType([node, arrayOf(node)]).isRequired,
};

export default Layout;
