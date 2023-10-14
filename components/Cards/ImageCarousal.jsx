import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../../helpers/settings/settings";

const ImageCarousel = ({ images, title }) => {
  return (
    <div className="">
      <Carousel responsive={responsive}>
        {images.map((image, index) => (
          <div key={image} className={`mb-4 ${index !== 0 ? "ml-4" : ""}`}>
            <div className={`rounded-md h-12 overflow-hidden`}>
              <Image
                src={image}
                alt={title}
                width={400}
                height={400}
                className=""
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
