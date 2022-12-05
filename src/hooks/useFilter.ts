import { useAtom } from 'jotai';
import { useState } from 'react';
import { todosAtom, todosFiltredsAtom } from '../atoms';

export function useFilter(): [
  boolean,
  {
    handleSetFilterFromActive(): void;
    handleSetFilterFromCompleted(): void;
    handleSetIsEmpty(): void;
  }
] {
  const [isEmpty, setIsEmpty] = useState(false);
  const [, setFilteredsTodos] = useAtom(todosFiltredsAtom);
  const [todos] = useAtom(todosAtom);

  function filterFrom(isActive: boolean) {
    const filteredTodos = todos.filter((todo) => todo.active === isActive);

    if (!filteredTodos.length) {
      return setIsEmpty(true);
    }
    setIsEmpty(false);
    setFilteredsTodos(filteredTodos);
  }

  function handleSetIsEmpty() {
    setIsEmpty(false);
  }

  function handleSetFilterFromActive() {
    filterFrom(true);
  }

  function handleSetFilterFromCompleted() {
    filterFrom(false);
  }

  return [
    isEmpty,
    {
      handleSetFilterFromActive,
      handleSetFilterFromCompleted,
      handleSetIsEmpty,
    },
  ];
}
