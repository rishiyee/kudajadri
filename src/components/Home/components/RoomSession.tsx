import Room from '../../../File/Room.md?raw';
import { parseMarkdown } from '../../../helper/mdPareser';

const RoomSession = () => {

  const { heading, content } = parseMarkdown(Room);

  return (
    <div className="sm:px-[12%] sm:py-32 bg-[#FFF] px-4 mobile:pt-14 mobile:pb-6 large:px-[18%]">
      <div className="sm:py-12 flex flex-col sm:flex-row justify-center">
        <h1 className="flex-1 sm:text-[44px] text-[32px] font-ivy">
          {heading}
        </h1>
        <p className="sm:w-[466px] sm:text-xl font-albertSans text-secondary">
       { content }
        </p>
      </div>
    </div>
  );
};

export default RoomSession;
