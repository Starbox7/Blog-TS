import "./gallery.css"
import Carousel from "react-material-ui-carousel"
import {Paper} from "@mui/material"

function Gallery() {
    return (
        <div className="gallery">
            <Carousel autoPlay={false} cycleNavigation={false} navButtonsAlwaysVisible={true} fullHeightHover={true} animation="slide"
                PrevIcon={<i className="fa-solid fa-chevron-left></i>
            NextIcon={<i className="fa-solid fa-chevron-right></i>}
            >
            <Item />
        </Carousel>
        </div >
    )
}

function Item() {
    return (
        <Paper>
            <img src="https://picsum.photos/100" width={"100%"} height={"450px"} />
        </Paper>
    )
}

export default Gallery