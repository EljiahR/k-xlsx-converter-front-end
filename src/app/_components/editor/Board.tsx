import styles from "@/styles/Board.module.css";
import CallUps from "./BoardSubComponents/CallUps";
import IndividualShifts from "./BoardSubComponents/IndividualShifts";
import Liquor from "./BoardSubComponents/Liquor";
import { useAppSelector } from "../../_lib/redux/hooks";
import { useRef } from "react";
import { selectCurrentDayBaggers, selectCurrentDayCallUps, selectCurrentDayCashiers, selectCurrentDayDesk, selectCurrentDayFuel, selectCurrentDayLiquor, selectCurrentDaySCOs, selectCurrentDayShifts, selectCurrentDaySupervisors } from "../../_lib/redux/shiftsSlice";

const Board = () => {
  const supervisors = useAppSelector(selectCurrentDaySupervisors);
  const cashiers = useAppSelector(selectCurrentDayCashiers);
  const scos = useAppSelector(selectCurrentDaySCOs);
  const baggers = useAppSelector(selectCurrentDayBaggers);
  const desk = useAppSelector(selectCurrentDayDesk)
  const fuel = useAppSelector(selectCurrentDayFuel);
  const callUps = useAppSelector(selectCurrentDayCallUps);
  const liquor = useAppSelector(selectCurrentDayLiquor);

  const inputReference = useRef(null);

  return (
    <div id="board">
      <div>
        {supervisors && (
            <IndividualShifts
              people={supervisors}
              positionName="Front End Supervisor"
              section="desk"
              inputReference={inputReference}
            />
        )}

        <IndividualShifts
          people={cashiers}
          positionName="Front End Cashier"
          section="cashier"
          inputReference={inputReference}
        />

        <IndividualShifts
          people={scos}
          positionName="Front End SCO Cashier"
          section="cashier"
          inputReference={inputReference}
        />

        <IndividualShifts
          people={baggers}
          positionName="Front End Courtesy Clerk"
          section="bagger"
          inputReference={inputReference}
        />
      
        <IndividualShifts
          people={desk}
          positionName="Front End Service Desk"
          section="desk"
          inputReference={inputReference}
        />

        <IndividualShifts
          people={fuel}
          positionName="Fuel Clerk"
          section="desk"
          inputReference={inputReference}
        />

      </div>
      <div id={styles["side-section"]}>
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
    </div>
  );
};
export default Board;
