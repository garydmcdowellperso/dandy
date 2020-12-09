import { dandyMachine } from "./utils/machine";
import { generateVueMachine } from "./utils/generateVueMachine";

export const fetchMachine = generateVueMachine(dandyMachine);