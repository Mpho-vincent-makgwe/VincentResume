export default function Time({
  cookTimeInMinutes,
  label,
  prepTimeInMinutes,
}) {
  const formatTime = (minutes) => {
    if (minutes >= 60) {
      const hours = Math.floor(minutes / 60);
      const mins = minutes % 60;

      if (mins === 0) {
        return `${hours} hour${hours > 1 ? "s" : ""}`;
      } else if (hours === 0) {
        return `${mins} minute${mins > 1 ? "s" : ""}`;
      } else {
        return `${hours} hour${hours > 1 ? "s" : ""} ${mins} minute${
          mins > 1 ? "s" : ""
        }`;
      }
    } else {
      return `${minutes} minute${minutes > 1 ? "s" : ""}`;
    }
  };

  const formattedLabel = label.toLowerCase();

  const formattedTime =
    formattedLabel === "total time"
      ? formatTime(cookTimeInMinutes + prepTimeInMinutes)
      : formatTime(cookTimeInMinutes);

  return (
    <p className=" transform translate-x-0 hover:translate-x-2 transition-transform duration-300 ease-in-out">
      <b>{label}:</b> {formattedTime}
    </p>
  );
}
