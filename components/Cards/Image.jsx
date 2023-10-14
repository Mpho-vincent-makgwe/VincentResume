import Image from "next/image";
import "react-multi-carousel/lib/styles.css";
import theme from "./Images.module.css";

const Images = ({ images, title }) => {
  return (
    <div className={`${theme.images}`}>
      {images.map((image, index) => (
        <div key={image} className={`mb-4 ${index !== 0 ? "ml-4" : ""}`}>
          <div className={`rounded-md w-40 overflow-hidden`}>
            <Image
              src={image}
              alt={title}
              width={400}
              height={400}
              className="rounded-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Images;
