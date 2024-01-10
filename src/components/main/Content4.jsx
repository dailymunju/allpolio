import { onTab } from '../../store/modules/CareerSlice';
import { Career } from "./ContentStyle";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
const Content4 = () => {
    const { careerData,careerCateData } = useSelector(state => state.CareerR)
    const navigate = useNavigate()
    const dispatch  = useDispatch()
    const onThum = () => {
        // dispatch(onTab ())
    }
    return (
        <Career>
            <div className="inner">
                <div className="tit-box">
                    <h2 className="tit">올폴리오 똑똑하게 이용하는법</h2>
                    <button onClick={() => navigate(`/career`)}>더보러가기</button>
                    {/* <Link to="/career">더보러가기</Link> */}
                </div>

                <ul>
                    <li onClick={ onThum }><img src="./images/cont4_01.jpg" alt="" /></li>
                    <li onClick={ onThum }><img src="./images/cont4_02.jpg" alt="" /></li>
                    <li onClick={ onThum }><img src="./images/cont4_03.jpg" alt="" /></li>
                </ul>
            </div>
        </Career>
    );
};

export default Content4;