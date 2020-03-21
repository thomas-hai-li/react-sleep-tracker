import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const SleepGoal = () => {
  const { sleepHoursGoal, updateSleepHoursGoal } = useContext(GlobalContext);
  const [ , updateState ] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  function onInput(newGoal) {
    newGoal = +newGoal;

    if (newGoal <= 24) {
      updateSleepHoursGoal(newGoal);
      forceUpdate();
    } else {
      updateSleepHoursGoal(sleepHoursGoal);
      forceUpdate();
    }
  }

  return (
    <div>
      <h4>My Goal</h4>
      <h1>
        <span contentEditable onInput={(e) => onInput(e.target.innerHTML)}>
          {sleepHoursGoal}
        </span>{' '}
        hours
      </h1>
    </div>
  );
};
