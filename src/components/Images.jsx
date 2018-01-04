import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [
  {
    src: 'https://res.cloudinary.com/cdanmar/image/upload/v1514961485/lindsey_paintings/423900_orig.jpg',
    srcSet: [
      'https://res.cloudinary.com/cdanmar/image/upload/w_375,h_500/lindsey_paintings/423900_orig.jpg 500w',
      'https://res.cloudinary.com/cdanmar/image/upload/w_600,h_800/lindsey_paintings/423900_orig.jpg 800w',
      'https://res.cloudinary.com/cdanmar/image/upload/w_768,h_1024/lindsey_paintings/423900_orig.jpg 1024w',
      'https://res.cloudinary.com/cdanmar/image/upload/w_1200,h_1600/lindsey_paintings/423900_orig.jpg 1600w'
    ],
    sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
    width: 3,
    height: 4
  },
  {
    src: 'https://res.cloudinary.com/cdanmar/image/upload/v1514961484/lindsey_paintings/7137152_orig.jpg',
    srcSet: [
      'https://res.cloudinary.com/cdanmar/image/upload/w_500,h_375/lindsey_paintings/7137152_orig.jpg 500w',
      'https://res.cloudinary.com/cdanmar/image/upload/w_800,h_600/lindsey_paintings/7137152_orig.jpg 800w',
      'https://res.cloudinary.com/cdanmar/image/upload/w_1024,h_768/lindsey_paintings/7137152_orig.jpg 1024w',
      'https://res.cloudinary.com/cdanmar/image/upload/w_1600,h_1200/lindsey_paintings/7137152_orig.jpg 1600w'
    ],
    sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
    width: 4,
    height: 3
  },
  {
    src: 'https://res.cloudinary.com/cdanmar/image/upload/v1514961378/lindsey_drawings/3204964_orig.jpg',
    srcSet: [
      'https://res.cloudinary.com/cdanmar/image/upload/w_375,h_500/lindsey_drawings/3204964_orig.jpg 500w',
      'https://res.cloudinary.com/cdanmar/image/upload/w_600,h_800/lindsey_drawings/3204964_orig.jpg 800w',
      'https://res.cloudinary.com/cdanmar/image/upload/w_768,h_1024/lindsey_drawings/3204964_orig.jpg 1024w',
      'https://res.cloudinary.com/cdanmar/image/upload/w_1200,h_1600/lindsey_drawings/3204964_orig.jpg 1600w'
    ],
    sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
    width: 3,
    height: 4
  },
  {
    src: 'https://res.cloudinary.com/cdanmar/image/upload/v1514961485/lindsey_paintings/138843_orig.jpg',
    srcSet: [
      'https://res.cloudinary.com/cdanmar/image/upload/w_375,h_500/lindsey_paintings/138843_orig.jpg 500w',
      'https://res.cloudinary.com/cdanmar/image/upload/w_600,h_800/lindsey_paintings/138843_orig.jpg 800w',
      'https://res.cloudinary.com/cdanmar/image/upload/w_768,h_1024/lindsey_paintings/138843_orig.jpg 1024w',
      'https://res.cloudinary.com/cdanmar/image/upload/w_1200,h_1600/lindsey_paintings/138843_orig.jpg 1600w'
    ],
    sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
    width: 3,
    height: 4
  },
  {
    src: 'https://res.cloudinary.com/cdanmar/image/upload/v1514961373/lindsey_drawings/2451103_orig.jpg',
    srcSet: [
      'https://res.cloudinary.com/cdanmar/image/upload/w_375,h_500/lindsey_drawings/2451103_orig.jpg 375w',
      'https://res.cloudinary.com/cdanmar/image/upload/w_600,h_800/lindsey_drawings/2451103_orig.jpg 600w',
      'https://res.cloudinary.com/cdanmar/image/upload/w_768,h_1024/lindsey_drawings/2451103_orig.jpg 768w',
      'https://res.cloudinary.com/cdanmar/image/upload/w_1200,h_1600/lindsey_drawings/2451103_orig.jpg 1200w'
    ],
    sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
    width: 3,
    height: 4
  },
  {
    src: 'https://res.cloudinary.com/cdanmar/image/upload/v1514961482/lindsey_paintings/6437351_orig.jpg',
    srcSet: [
      'https://res.cloudinary.com/cdanmar/image/upload/w_500,h_375/lindsey_paintings/6437351_orig.jpg 500w',
      'https://res.cloudinary.com/cdanmar/image/upload/w_800,h_600/lindsey_paintings/6437351_orig.jpg 800w',
      'https://res.cloudinary.com/cdanmar/image/upload/w_1024,h_768/lindsey_paintings/6437351_orig.jpg 1024w',
      'https://res.cloudinary.com/cdanmar/image/upload/w_1600,h_1200/lindsey_paintings/6437351_orig.jpg 1600w'
    ],
    sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
    width: 4,
    height: 3
  },
  {
    src: 'https://res.cloudinary.com/cdanmar/image/upload/v1514961483/lindsey_paintings/2860613_orig.jpg',
    srcSet: [
      'https://res.cloudinary.com/cdanmar/image/upload/w_500,h_375/lindsey_paintings/2860613_orig.jpg 500w',
      'https://res.cloudinary.com/cdanmar/image/upload/w_800,h_600/lindsey_paintings/2860613_orig.jpg 800w',
      'https://res.cloudinary.com/cdanmar/image/upload/w_1024,h_768/lindsey_paintings/2860613_orig.jpg 1024w',
      'https://res.cloudinary.com/cdanmar/image/upload/w_2200,h_1200/lindsey_paintings/2860613_orig.jpg 1600w'
    ],
    sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
    width: 6,
    height: 3
  },
  {
    src: 'https://res.cloudinary.com/cdanmar/image/upload/v1514961483/lindsey_paintings/307769_orig.jpg',
    srcSet: [
      'https://res.cloudinary.com/cdanmar/image/upload/w_375,h_500/lindsey_paintings/307769_orig.jpg 375w',
      'https://res.cloudinary.com/cdanmar/image/upload/w_600,h_800/lindsey_paintings/307769_orig.jpg 600w',
      'https://res.cloudinary.com/cdanmar/image/upload/w_768,h_1024/lindsey_paintings/307769_orig.jpg 768w',
      'https://res.cloudinary.com/cdanmar/image/upload/w_1200,h_1600/lindsey_paintings/307769_orig.jpg 1200w'
    ],
    sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
    width: 3,
    height: 4
  },


];

class Images extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    return (
      <div>
        <Gallery photos={photos} onClick={this.openLightbox} />
        <Lightbox images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    )
  }
}

export default Images
