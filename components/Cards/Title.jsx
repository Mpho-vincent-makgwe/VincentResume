import { Roboto } from "next/font/google";
const roboto = Roboto({
  subsets: ["greek-ext"], // Specify the "latin" subset
  weight: ["400", "700"],
});

export const Title = ({ title }) => {
  return (
    <div>
      <h2 className={`font-semibold font-alkatra`}>{title}</h2>
    </div>
  );
};
export default Title;
