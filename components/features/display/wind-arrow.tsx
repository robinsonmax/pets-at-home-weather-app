import { WindDirection, windDirections } from "@/lib/getWeatherData";
import { LucideProps, MousePointer2 } from "lucide-react";

const WindArrow = ({
  direction,
  ...props
}: { direction: WindDirection } & LucideProps) => {
  const windDirectionIndex = windDirections.findIndex((d) => d === direction);
  const windDirection = 0.125 + windDirectionIndex / windDirections.length;

  return (
    <MousePointer2
      style={{ transform: `rotate(${windDirection}turn)` }}
      {...props}
    />
  );
};

export { WindArrow };
