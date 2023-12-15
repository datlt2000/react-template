import React from "react";
import AnimationRevealPage from "components/helpers/AnimationRevealPage";
import { Container } from "react-bootstrap";
import FeatureThreeColumnLayout from "components/layouts/FeatureThreeColumnLayout";
import {
    reviews, featuresPage, slides, dress,
    collection1, collection2, collection3, collection4
}
    from 'const/DressPageDemo';
import ReviewThreeColumnLayout from "components/users/ReviewThreeColumnLayout";
import DownloadAppLayout from "components/layouts/DownloadAppLayout";
import app from 'images/app-mockup.png';
import SimpleSlide from "components/slide/SimpleSlider";
import CardListLayout from "components/menu/CardListLayout";

export default function DressShopLandingPage() {
    return (
        <>
            <AnimationRevealPage disabled>
                <div>
                    <SimpleSlide slides={slides} />
                </div>
                <Container className="my-5">
                    <CardListLayout title="Sản phẩm mới" listItem={dress} />
                </Container>
                <div className="my-5">
                    <picture>
                        <source media='(min-width: 720px)' srcSet={collection1} style={{ width: '100%', height: '100%' }} />
                        <img src={collection2} alt='summer collection' style={{ width: '100%', height: '100%' }} />
                    </picture>
                </div>
                <Container className="my-5">
                    <CardListLayout title="Mặc thường ngày" listItem={dress} />
                </Container>
                <div className="my-5">
                    <picture>
                        <source media='(min-width: 720px)' srcSet={collection3} style={{ width: '100%', height: '100%' }} />
                        <img src={collection4} alt='sea collection' style={{ width: '100%', height: '100%' }} />
                    </picture>
                </div>
                <Container className="my-5">
                    <CardListLayout title="Bộ sưu tập áo dài" listItem={dress} />
                </Container>
                <Container fluid className="my-5">
                    <FeatureThreeColumnLayout {...featuresPage} />
                </Container>
                <Container fluid className="my-5">
                    <ReviewThreeColumnLayout reviews={reviews} title="Khách hàng nói gì?" description='Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
                </Container>
                <Container fluid className="my-5 bg-dark">
                    <DownloadAppLayout title="Developers all over the world are happily using Treact." image={app} />
                </Container>
            </AnimationRevealPage>
        </>
    );
}