import React from 'react';

import ToolBox from './ToolBox';

const Layout = () => (
    <div>
      <header></header>
      <aside>
        <ToolBox displayName="My Companies" name="companies"/>
        <ToolBox displayName="Preferences" name="preferences" />
        <ToolBox displayName="Module Manager" name="modules" />
      </aside>
      <section>

      </section>
    </div>
  );

export default Layout;
