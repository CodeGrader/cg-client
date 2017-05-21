import React from 'react';
import Responsive from 'react-responsive-decorator';

import Logo from '../Logo';
import CompanySearch from '../CompanySearch';

const SCREEN_SIZE_THRESHOLD = 768;

@Responsive
class Layout extends React.Component {
  constructor() {
    super();
    this.state = { isMobile: false };
  }

  componentDidMount() {
    const { media } = this.props;
    media({ minWidth: SCREEN_SIZE_THRESHOLD }, () => this.setState({ isMobile: false }));
    media({ maxWidth: SCREEN_SIZE_THRESHOLD }, () => this.setState({ isMobile: true }));
  }

  render() {
    const { isMobile } = this.state;
    return (
      <div>
        <header>
          <Logo {...{ isMobile }} />
        </header>
        <aside>
          <nav></nav>
        </aside>
        <section>
          <CompanySearch />
        </section>
      </div>
    );
  }
}

export default Layout;
