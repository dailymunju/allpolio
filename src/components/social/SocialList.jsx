import { useSelector } from "react-redux";
import { SocialListWrap } from "./SocialStyle";
import SocialItem from "./SocialItem";
import { useNavigate } from "react-router-dom";

const SocialList = () => {
    const { socialData } = useSelector((state) => state.socialR);

    const navigate = useNavigate();
    return (
        <SocialListWrap>
            {socialData.map((item) => (
                <SocialItem key={item.id} item={item} />
            ))}
        </SocialListWrap>
    );
};

export default SocialList;
