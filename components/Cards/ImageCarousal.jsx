import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../../helpers/settings/settings";
import theme from "./Image.module.css";
const ImageCarousel = ({ images, title }) => {
  return (
    <div className={``}>
      <Carousel responsive={responsive}>
        {images.map((image) => (
          <div key={image} className=" w-fit gap-4 ">
            <div>
              <Image
                src={image}
                alt={title}
                width={400}
                height={400}
                className={`  rounded-md ${``}`}
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default ImageCarousel;
