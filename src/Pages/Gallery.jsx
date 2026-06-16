import GalleryPage from "../Component/GalleryPage/GalleryPage";
import PageBanner from "../Component/ReusableComp/PageBanner";
import WestvilleCottage from "../Component/ReusableComp/WestvilleCottage";

function Gallery() {
    return (
        <>
            <PageBanner title="Gallery" />
            <WestvilleCottage />
            <GalleryPage />
        </>
    );
}

export default Gallery;