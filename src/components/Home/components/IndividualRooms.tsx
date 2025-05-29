import { useNavigate } from "react-router-dom";
import { IndividualRoomSession } from "./IndividualRoomSession";
import roomOne from "/src/assets/roomOne.jpg";
import roomTwo from "/src/assets/roomTwo.jpg";
import roomThree from "/src/assets/roomThree.jpg";

export const IndividualRooms = () => {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      navigate(path);
    }, 300); // slight delay to let the scroll play out
  };

  return (
    <div className="flex flex-col justify-center px-4 py-16 sm:px-[6%] sm:py-32 gap-6 large:px-[18%]">
      <IndividualRoomSession
        subTitle="ESSENTIAL"
        title="Deluxe Rooms"
        discription="An economic escape in a lush atmosphere. This is affordable luxury with no compromises."
        image={roomOne}
        onClick={() => handleClick("/rooms/deluxe-rooms")}
      />
      <IndividualRoomSession
        subTitle="ESSENTIAL"
        title="Deluxe Heritage Rooms"
        discription="An economic escape in a lush atmosphere. This is affordable luxury with no compromises."
        image={roomTwo}
        type="reverse"
        onClick={() => handleClick("/rooms/deluxe-heritage-rooms")}
      />
      <IndividualRoomSession
        subTitle="ESSENTIAL"
        title="Classic Rooms"
        discription="An economic escape in a lush atmosphere. This is affordable luxury with no compromises."
        image={roomThree}
        onClick={() => handleClick("/rooms/classic-rooms")}
      />
    </div>
  );
};
