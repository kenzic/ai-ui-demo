import { useState, useRef } from "react";
import { useIUI, UIStates, UIState } from "./context";
import { SummaryComponent, BioComponent, InsightComponent } from "./display";

// This is hardcoded and redundant. In a real application, you would likely
// want a more robust system for registering available components
const componentMap: {
  [key: string]: React.ComponentType<any>;
} = {
  SummaryComponent: SummaryComponent,
  BioComponent: BioComponent,
  InsightComponent: InsightComponent,
};

type SlotProps = {
  shouldUpdate: (uiState: UIStates) => UIStates | false;
  children: React.ReactNode;
};

/**
 * Slot component determines which of the ui states to render
 * by checking the shouldUpdate function, which returns an array of
 * UIStates to render or false if slot should not update
 *
 * By default, the Slot component will render the children
 * returning false from shouldUpdate does not change the
 * existing rendered components
 *
 * You would likely want a more robust system for examing and selectively
 * rendering UIStates in a real application
 *
 * @param shouldUpdate - function that returns an array of UIStates to render or false if Slot should not update
 * @param children
 * @returns
 */
export const Slot = ({ shouldUpdate, children = null }: SlotProps) => {
  const localState = useRef<UIStates>([]);
  const { uiState } = useIUI();

  const states = shouldUpdate(uiState);
  if (states) {
    localState.current = states;
  }

  if (localState.current.length === 0) return children;

  return (
    <div>
      {localState.current.map((ui) => {
        const Component = componentMap[ui.component];
        return <Component key={ui.id} {...ui.data} />;
      })}
    </div>
  );
};
