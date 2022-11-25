import { format } from "date-fns";
import { ITimelineItem } from "../../models";
import { MdNotifications } from "react-icons/md";

interface ITimelineCardProps {
  item: ITimelineItem;
}

export default function Card({ item }: ITimelineCardProps) {
  return (
    <>
      <div className="avatar">
        <img src={item.userAvatar} />
      </div>

      <div className="card">
        <div className="header">
          <MdNotifications color="#c3c3c3" size={22} />
          <span className="card-title">{item.title}</span>
          <span>{format(new Date(item.date), "MM/dd/yyyy")}</span>
        </div>
        <div className="body">
          <span>{item.description}</span>
        </div>
      </div>
    </>
  );
}
