import Image from "next/image";

const MovieImage = ({image}:any):any =>{
if(!image){
    return<div>Loading...</div>
}
    return (
    <div>
    <Image alt={image.height} src={image.imageUrl} width={image.width} height={image.height} />
    </div>
    );
};


export default MovieImage