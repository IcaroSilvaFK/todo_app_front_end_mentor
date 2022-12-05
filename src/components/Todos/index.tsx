import { Reorder, AnimatePresence } from 'framer-motion';
import { useAtom } from 'jotai';
import { BiCheck } from 'react-icons/bi';

import Cross from '../../assets/svgs/icon-cross.svg';

import { ListItem } from './styles';
import { todosAtom, todosFiltredsAtom } from '../../atoms';
import { useEffect } from 'react';

interface ITodosProps {
  tabOpen: 'all' | 'active' | 'completed';
}

export function Todos({ tabOpen }: ITodosProps) {
  const [todos, setTodos] = useAtom(todosAtom);
  const [filterdsTodos, setTodosFiltereds] = useAtom(todosFiltredsAtom);

  useEffect(() => {
    if (tabOpen === 'all') {
      console.log('a');
      setTodosFiltereds(todos);
    }
    if (tabOpen === 'active') {
      setTodosFiltereds(todos.filter((todo) => todo.active));
    }
    if (tabOpen === 'completed') {
      setTodosFiltereds(todos.filter((todo) => !todo.active));
    }
  }, [tabOpen, todos]);

  function handleCompleteTodo(id: string) {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            active: !todo.active,
          }
        : todo
    );

    setTodos(updatedTodos);
  }

  function handleRemoveTodo(id: string) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    setTodos(updatedTodos);
  }

  return (
    <Reorder.Group
      axis='y'
      values={filterdsTodos}
      onReorder={setTodosFiltereds}
      animate
    >
      <AnimatePresence>
        {filterdsTodos?.map((todo) => (
          <Reorder.Item key={todo.id} value={todo}>
            <ListItem isActive={!todo.active}>
              <button onClick={() => handleCompleteTodo(todo.id)}>
                {!todo.active && <BiCheck size={20} fontWeight='bold' />}
              </button>
              <button onClick={() => handleRemoveTodo(todo.id)}>
                <span>{todo.content}</span>
                <img src={Cross} />
              </button>
            </ListItem>
          </Reorder.Item>
        ))}
      </AnimatePresence>
    </Reorder.Group>
  );
}
