import React from 'react';
import TopbarSimple from 'components/topbar/TopbarSimple';
import LayoutContent from 'components/bases/LayoutContent';
import SimpleThreeColumnFooter from 'components/footer/SimpleThreeColumnFooter';
import { navLink, footer } from 'const/DressPageDemo';
import landingPageRoute from 'routes/LandingPageRouter';
import logo from "images/logo.svg";

const LandingPageLayout = () => {
    return (
        <div>
            <TopbarSimple type="relative" navLink={navLink} logo={logo} title="Treact" />
            <LayoutContent routes={landingPageRoute} />
            <SimpleThreeColumnFooter {...footer}/>
        </div>
    )
}

export default LandingPageLayout;
