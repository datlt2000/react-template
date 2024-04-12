import React from "react";
import { Container } from "react-bootstrap";
import SimpleThreeColumnFooter from "components/footer/SimpleThreeColumnFooter";
import TopbarSimple from "components/topbar/TopbarSimple";
import AnimationRevealPage from "components/helpers/AnimationRevealPage";
import {
    footer, navLink, slides,
    collection2, collection4
}
    from 'const/DressPageDemo';
import logo from "images/logo.svg";
import SimpleProductDetail from "components/product/SimpleProductDetail";
export default function ProductPage(props) {
    return (
        <>
            <AnimationRevealPage disabled>
                <Container>
                    <SimpleProductDetail images={slides} reverse />
                </Container>
                <hr />
                <Container className="text-dark">
                    <h1>Chi tiết sản phẩm</h1>
                    <div className="fw-normal my-3">Dưới tiết trời hè nắng nóng, chất liệu vải được các nhà thiết kế luôn ưu tiên
                        lựa chọn các dòng vải lụa cao cấp mang đến cho chị em những mẫu áo dài đẹp
                        chất lượng từ phom dáng tới chất vải mềm mịn và thoải mái hoạt động mà không
                        lo bí nóng, lộ khuyết điểm. Chất liệu vải lụa gấm vân hoa tuplip không chỉ được
                        thêu dệt tinh tế nổi bật lên hoạ tiết hoa tuplip mà thước vải được các nghệ nhân
                        tỉ mỉ trong từng chi tiết. Chất vải lựa gấm thoáng mát, thấm hút mồ hôi tốt ngoài
                        ra được làm từ chất liệu vải từ thiên nhiên nên các nàng không cần quá lo lắng bị
                        kích ứng trên da.</div>
                    <img src={collection2} alt=''/>
                    <div className="fw-normal my-3">Lấy cảm hứng vẻ đẹp và hương sắc thiên nhiên trong bộ sưu tập nà, Lamia mong muốn
                        mang đến một mẫu áo dài toả ngát hương hoa cùng màu sắc tươi mới, nổi bật trong ngày
                        tựu trường sắp tới hay các sự kiện vui chơi, ngắm phong cảnh,…. đều rất phù hợp bởi
                        gam màu đỏ tươi sáng, bắt mắt. Với gam màu đỏ này giúp các nàng trở nên nổi bật và
                        tươi sáng hơn, tôn da thêm bừng sáng và dạng rỡ.</div>
                    <img src={collection4} alt='' />
                </Container>
            </AnimationRevealPage>
        </>
    );
}