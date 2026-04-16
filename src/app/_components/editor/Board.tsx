import styles from "@/styles/Board.module.css";
import CallUps from "./BoardSubComponents/CallUps";
import IndividualShifts from "./BoardSubComponents/IndividualShifts";
import Liquor from "./BoardSubComponents/Liquor";
import { useAppSelector } from "../../_lib/redux/hooks";
import { selectCurrentDayAllDesk, selectCurrentDayBaggers, selectCurrentDayCallUps, selectCurrentDayFuel, selectCurrentDayLiquor, selectCurrentDayRegisters } from "../../_lib/redux/shiftsSlice";

const Board = () => {
  const registers = useAppSelector(selectCurrentDayRegisters)
  const baggers = useAppSelector(selectCurrentDayBaggers);
  const desk = useAppSelector(selectCurrentDayAllDesk)
  const fuel = useAppSelector(selectCurrentDayFuel);
  const callUps = useAppSelector(selectCurrentDayCallUps);
  const liquor = useAppSelector(selectCurrentDayLiquor);

  return (
    <div id="board">
      <div id="register">
        <IndividualShifts
            people={registers}
            positionName="Cashiers and Scos"
            section="register"
        />
      </div>
      <div id="baggers">
        <IndividualShifts
          people={baggers}
          positionName="Front End Courtesy Clerk"
          section="bagger"
        />
      </div>
      <div id="desk">
        <IndividualShifts
          people={desk}
          positionName="Front End Service Desk"
          section="desk"
        />
      </div>  

      <IndividualShifts
        people={fuel}
        positionName="Fuel Clerk"
        section="desk"
      />

      
      {callUps && (
          <CallUps
                people={callUps}
                positionName="callup"
          />
      )}
      <Liquor
        people={liquor}
        positionName="liquor"
      />
      
    </div>
  );
};
export default Board;
