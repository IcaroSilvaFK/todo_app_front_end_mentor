import { useAtom } from 'jotai';
import { FormEvent, RefObject, useRef } from 'react';
import cuid from 'cuid';

import { todosAtom } from '../atoms';

export function useForm(): [
  RefObject<HTMLInputElement>,
  (e: FormEvent) => void
] {
  const inputRef = useRef<HTMLInputElement>(null);
  const [todos, setTodos] = useAtom(todosAtom);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (inputRef.current && !inputRef.current?.value.trim()) {
      return;
    }

    setTodos([
      ...todos,
      { content: inputRef.current!.value, id: cuid(), active: true },
    ]);

    inputRef.current!.value = '';
  }

  return [inputRef, handleSubmit];
}
