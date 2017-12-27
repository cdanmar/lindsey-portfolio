import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [
  {
    src: 'https://source.unsplash.com/1600x900/?nature,clouds',
    srcSet: [
      'https://source.unsplash.com/500x375/?nature,clouds 500w',
      'https://source.unsplash.com/800x600/?nature,clouds/ 800w',
      'https://source.unsplash.com/1024x768/?nature,clouds/ 1024w',
      'https://source.unsplash.com/1600x1200/?nature,clouds/ 1600w'
    ],
    sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
    width: 4,
    height: 3
  },
  {
    src: 'https://source.unsplash.com/1600x900/?dog',
    srcSet: [
      'https://source.unsplash.com/500x375/?dog 500w',
      'https://source.unsplash.com/800x600/?dog 800w',
      'https://source.unsplash.com/1024x768/?dog 1024w',
      'https://source.unsplash.com/1600x1200/?dog 1600w'
    ],
    sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
    width: 1,
    height: 1
  },
  {
    src: 'https://source.unsplash.com/1600x900/?sunset,ocean',
    srcSet: [
      'https://source.unsplash.com/375x500/?sunset,ocean 375w',
      'https://source.unsplash.com/600x800/?sunset,ocean 600w',
      'https://source.unsplash.com/768x1024/?sunset,ocean 768w',
      'https://source.unsplash.com/1200x1600/?sunset,ocean 1200w'
    ],
    sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
    width: 3,
    height: 4
  },
  {
    src: 'https://source.unsplash.com/1600x900/?cat,yarn',
    srcSet: [
      'https://source.unsplash.com/375x500/?cat,yarn 375w',
      'https://source.unsplash.com/600x800/?cat,yarn 600w',
      'https://source.unsplash.com/768x1024/?cat,yarn 768w',
      'https://source.unsplash.com/1200x1600/?cat,yarn 1200w'
    ],
    sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
    width: 3,
    height: 4
  },
  {
    src: 'https://source.unsplash.com/1600x900/?forest',
    srcSet: [
      'https://source.unsplash.com/375x500/?forest 375w',
      'https://source.unsplash.com/600x800/?forest 600w',
      'https://source.unsplash.com/768x1024/?forest 768w',
      'https://source.unsplash.com/1200x1600/?forest 1200w'
    ],
    sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
    width: 3,
    height: 4
  },
  {
    src: 'https://source.unsplash.com/1600x1200/?space',
    srcSet: [
      'https://source.unsplash.com/500x375/?space 500w',
      'https://source.unsplash.com/800x600/?space 800w',
      'https://source.unsplash.com/1024x768/?space 1024w',
      'https://source.unsplash.com/1600x1200/?space 1600w'
    ],
    sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
    width: 4,
    height: 3
  },
  {
    src: 'https://source.unsplash.com/1200x1600/?fish',
    srcSet: [
      'https://source.unsplash.com/375x500/?fish 375w',
      'https://source.unsplash.com/600x800/?fish 600w',
      'https://source.unsplash.com/768x1024/?fish 768w',
      'https://source.unsplash.com/1200x1600/?fish 1200w'
    ],
    sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
    width: 3,
    height: 4
  },
  {
    src: 'https://source.unsplash.com/1600x1200/?art',
    srcSet: [
      'https://source.unsplash.com/500x375/?art 500w',
      'https://source.unsplash.com/800x600/?art 800w',
      'https://source.unsplash.com/1024x768/?art 1024w',
      'https://source.unsplash.com/1600x1200/?art 1600w'
    ],
    sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
    width: 4,
    height: 3
  },
  {
    src: 'https://source.unsplash.com/1600x1200/?dance',
    srcSet: [
      'https://source.unsplash.com/500x375/?dance 500w',
      'https://source.unsplash.com/800x600/?dance 800w',
      'https://source.unsplash.com/1024x768/?dance 1024w',
      'https://source.unsplash.com/1600x1200/?dance 1600w'
    ],
    sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
    width: 4,
    height: 3
  }
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
