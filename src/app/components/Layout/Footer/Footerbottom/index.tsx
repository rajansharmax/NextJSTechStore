import FooterBottomStyleWrapper from "./styled";
import SocialLinks from "@/assets/data/footer/SocialLinks";
import backToTopIcon from "@/assets/images/icon/back_to_top.svg";
import footerShapesLeft from "@/assets/images/icon/footer_shapes_left.png";
import footerShapesRight from "@/assets/images/icon/footer_shapes_right.png";
import Image from "next/image";

const FooterBottom = () => {
  return (
    <FooterBottomStyleWrapper className="footer_bottom">
      <div className="footer_bottom_content">
        <span className="footer_shapes_left">
          <Image src={footerShapesLeft} alt="bithu nft footer" />
        </span>
        <span className="footer_shapes_right">
          <Image src={footerShapesRight} alt="bithu nft footer" />
        </span>
        <div className="container">
          <div className="footer_menu">
            <div className="bottom_footer_left">
              <div className="copyright_text">
                Copyright ©{new Date().getFullYear()} TechStoreNectJS, All
                rights reserved.
              </div>
            </div>
            <a href="#" className="bact_to_top_btn">
              <Image src={backToTopIcon} alt="bithu nft back to top" />
            </a>
            <div className="bottom_footer_right">
              <ul>
                {SocialLinks?.map((item, i) => (
                  <li key={i}>
                    <a href={item.url}>
                      {item.thumb ? (
                        <Image src={item.thumb} alt="bithu nft social" />
                      ) : (
                        item.icon
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </FooterBottomStyleWrapper>
  );
};

export default FooterBottom;
