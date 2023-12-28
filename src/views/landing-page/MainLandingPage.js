import React from "react";
import AnimationRevealPage from "components/helpers/AnimationRevealPage";
import TopbarButton from "components/topbar/TopbarButton";
import { Button, Container } from "react-bootstrap";
import TwoColumnWithImageLayout from "components/layouts/TwoColumnWithImageLayout";
import logo from "images/logo.svg";
import ListCardLayout from "components/menu/CardListLayout";
import FlexiblePrice from "components/pricing/FlexiblePrice";
import FeatureThreeColumnLayout from "components/layouts/FeatureThreeColumnLayout";
import StatThreeColumnLayout from "components/layouts/StatThreeColumnLayout";
import DurationPrice from "components/pricing/DurationPrice";
import CardListSwitcherLayout from "components/menu/CardListSwitcherLayout";
import { priceDurationPage, pricePage, authors, menu, footer, listCard, reviews, statPage, cardMenu, featuresPage, navLink, advantage } from 'const/demodata';
import AvatarThreeColumnLayout from "components/users/AvatarThreeColumnLayout";
import ReviewThreeColumnLayout from "components/users/ReviewThreeColumnLayout";
import DownloadAppLayout from "components/layouts/DownloadAppLayout";
import app from 'images/app-mockup.png';
import SimpleThreeColumnFooter from "components/footer/SimpleThreeColumnFooter";

export default function MainLandingPage() {

    const getMenuData = (tab) => {
        return menu[tab];
    }
    const getPriceData = (duration) => {
        return priceDurationPage[duration];
    }
    return (
        <>
            <TopbarButton type="sticky" theme navLink={navLink} logo={logo} title="Treact" button="Download" />
            <AnimationRevealPage disabled>
                <Container className="my-5">
                    <TwoColumnWithImageLayout  {...advantage} >
                        <div className="d-flex mb-3 justify-content-center justify-content-lg-start">
                            <Button size="lg" className="mx-2 px-4 fw-bold">View Demos</Button>
                            <Button variant="light" size="lg" className="mx-2 px-4 fw-bold">
                                Components
                            </Button>
                        </div>
                    </TwoColumnWithImageLayout>
                </Container>
                <Container fluid className="my-5">
                    <ListCardLayout listItem={listCard} title="Landing Pages"
                        description="We have 7 premade landing pages. 
                        Click on the View Live Demo button to see them in action. 
                        Customizing or Creating your own custom landing page is really simple by using our UI components." />
                </Container>
                <Container fluid className="my-5">
                    <ListCardLayout listItem={listCard} title="Inner Page"
                        description="We also provide 8 additional inner pages for your various needs like a signup, 
                        login, pricing, about us, contact, blog etc. To view them in action click the View Live Demo button." />
                </Container>
                <Container fluid className="my-5">
                    <FlexiblePrice {...pricePage} />
                </Container>
                <Container fluid className="my-5">
                    <FeatureThreeColumnLayout {...featuresPage} />
                </Container>
                <Container fluid className="my-5">
                    <StatThreeColumnLayout {...statPage} />
                </Container>
                <Container fluid className="my-5">
                    <DurationPrice {...priceDurationPage} getData={getPriceData} />
                </Container>
                <Container fluid className="my-5">
                    <CardListSwitcherLayout {...cardMenu} getData={getMenuData} />
                </Container>
                <Container fluid className="my-5">
                    <AvatarThreeColumnLayout authors={authors} title="Meet These Fine Folks." description='Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
                </Container>
                <Container fluid className="my-5">
                    <ReviewThreeColumnLayout reviews={reviews} title="Customer's Review" description='Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
                </Container>
                <Container fluid className="my-5 bg-dark">
                    <DownloadAppLayout title="Developers all over the world are happily using Treact." image={app}/>
                </Container>
                <Container fluid className="my-5">
                    <SimpleThreeColumnFooter {...footer}/>
                </Container>
            </AnimationRevealPage>
        </>
    );
}