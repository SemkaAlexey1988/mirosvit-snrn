import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import classes from '../../styles/product/product.module.scss'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Modal = ({ modal, items, handleModalFalse, currentIndex, featured }) => {
  return (
    <div className={classes.productImages} onClick={handleModalFalse}>
      {/* this only features the first image */}
      {/* <img src={featured} /> */}
      {/* shows every image on modal*/}
      <div className={classes.productImages}>
        <img src={items[currentIndex]} />
      </div>
    </div>
  );
};

class ProductImages extends React.Component {

  constructor() {
    super();
    this.state = {
      currentIndex: 0,
      items: [],
      modal: false,
      featured: undefined
    };

  }

  componentDidMount() {
    let mainImg = this.props.product
    console.log(mainImg.image)
    let imgList = [
      mainImg.image,
      "/assets/images/htc_touch_hd_2.jpg",
      "/assets/images/samsung_tab_2.jpg",
      "/assets/images/sony_vaio_4.jpg"  
      ]
    this.setState({ items: imgList });  
    this.setState({ featured: this.state.items[0] });
  }

  responsive = {
    0: { items: 1 },
    1024: { items: 1 }
  };

  slideTo = i => console.log("clicked") || this.setState({ currentIndex: i });

  // Do I need this method at all?
  onSlideChanged = e => this.setState({ currentIndex: e.item });

  handleModalFalse = () => {
    this.setState({ modal: false });
  };

  render() {
    return (
      <>

        <Modal
          modal={this.state.modal}
          items={this.state.items}
          handleModalFalse={this.handleModalFalse}
          currentIndex={this.state.currentIndex}
          featured={this.state.featured}
        />
     
 
        <RenderThumbs
          items={this.state.items}
          slideNext={this.slideNext}
          slidePrev={this.slidePrev}
          slideTo={this.slideTo}
          responsive={this.responsive}
        />
      </>
    );
  }
}

const RenderGallery = ({ currentIndex, items, onSlideChanged, responsive }) => {
  return (
    <AliceCarousel
      dotsDisabled={false}
      buttonsDisabled={true}
      slideToIndex={currentIndex}
      onSlideChanged={onSlideChanged}
      responsive={responsive}
    >
      {items.map((item, i) => (
        <div key={i} className={classes.productImages}>
          <img src={item} />
        </div>
      ))}
    </AliceCarousel>
    
  );
};

// Thumbnails
const RenderThumbs = ({ items, slideNext, slidePrev, slideTo }) => (
  <ul className={classes.productThumbList}>
    {items.map((item, i) => (
      <li className={classes.productThumb} key={i} onClick={() => slideTo(i)}>
        <img src={item} />
      </li>
    ))}
  </ul>
);

export default ProductImages;
