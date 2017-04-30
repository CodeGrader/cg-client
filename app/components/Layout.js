import React from 'react';
import Responsive from 'react-responsive-decorator';

import Logo from './Logo';

@Responsive
class Layout extends React.Component {
  constructor() {
    super();
    this.state = { isMobile: false };
  }

  componentDidMount() {
    this.props.media({ minWidth: 768 }, () => this.setState({ isMobile: false }));
    this.props.media({ maxWidth: 768 }, () => this.setState({ isMobile: true }));
  }

  render() {
    const { isMobile } = this.state;
    return (
      <div>
        <header>
          <Logo isMobile={isMobile} />
        </header>
        <aside>
          <nav></nav>
        </aside>
        <section>
        </section>
      </div>
    );
  }
}

export default Layout;
