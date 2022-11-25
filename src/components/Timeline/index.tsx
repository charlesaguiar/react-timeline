import { ITimelineItem } from "../../models";
import Card from "../Card";

interface ITimelineProps {
  data: ITimelineItem[];
}

export default function Timeline({ data }: ITimelineProps) {
  return (
    <div className="timeline">
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}
