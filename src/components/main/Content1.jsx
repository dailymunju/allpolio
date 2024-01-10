import Category from "../category/Category";
import { MainCon } from "./ContentStyle";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { getGallerys1, getGallerys2 } from '../../store/modules/gallerySlice';
import GalleryItem from "./GalleryItem";
import { portfolioData } from "../../assets/api/portfolioData";
import { changeLoc } from '../../store/modules/HomeSlice';
import { addData } from "../../store/modules/paginationSlice";
import Pagination1 from "../pagination/Pagination1";

const Content1 = () => {
    const { text1, text2, loading, loading1 } = useSelector( state => state.galleryR )
    const { portfolioData } = useSelector(state => state.HomeR)
    const dispatch  = useDispatch()
    const { currPage, postsPerPage } = useSelector(state => state.pagination)

    const lastPost = currPage * postsPerPage
    const firstPost = lastPost - postsPerPage
    const currentPosts = portfolioData.slice(firstPost, lastPost)
    useEffect(() => { //페이지가 다르므로 갱신필요
        dispatch( addData(portfolioData))
    },[])

    useEffect( () => {       
        dispatch( getGallerys1(text1) )
        dispatch( getGallerys2(text2) )
    } ,[]) 

    const [loc, setLoc] = useState(location)
    useEffect(()=>{
        dispatch(changeLoc('mainPage'))
    },[])
   
    return (
        <MainCon>
            <div className="inner">
                <h2 className="tit">국내 최고의 포트폴리오를 만나보세요!</h2>
                <Category/>
                <div className="mainPort">
                    <ul>
                        {
                           !loading && !loading1 && currentPosts.map(item => <GalleryItem key={item.id} item ={item}  />)                        
                        }
                    </ul>
                    <Pagination1/>
                </div>
            </div>
        </MainCon>
    );
};
export default Content1;