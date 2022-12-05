import { useAtom } from 'jotai';

import { todosAtom, todosFiltredsAtom } from '../../atoms';

import { Container } from './styles';

type TabOpen = 'all' | 'active' | 'completed';

type Todos = {
  id: string;
  content: string;
  active: boolean;
};

interface IFooterProps {
  setIsEmpty(): void;
  filterFromActive(): void;
  filterFromCompleted(): void;
  tabOpen: TabOpen;
}

export function Footer({
  filterFromActive,
  filterFromCompleted,
  setIsEmpty,
  tabOpen,
}: IFooterProps) {
  const [todos, setTodos] = useAtom(todosAtom);

  const [filterdsTodos] = useAtom(todosFiltredsAtom);

  function handleClearCompletedTodos() {
    const todosAllNotCompleted = todos.filter((todo) => todo.active);
    setTodos(todosAllNotCompleted);
  }

  return (
    <Container>
      <span>{filterdsTodos.length} items left</span>
      <nav>
        <ul>
          <li className={tabOpen === 'all' ? 'active' : ''}>
            <button onClick={setIsEmpty}>All</button>
          </li>
          <li className={tabOpen === 'active' ? 'active' : ''}>
            <button onClick={filterFromActive}>Active</button>
          </li>
          <li className={tabOpen === 'completed' ? 'active' : ''}>
            <button onClick={filterFromCompleted}>Completed</button>
          </li>
        </ul>
      </nav>
      <button onClick={handleClearCompletedTodos}>Clear Completed</button>
    </Container>
  );
}
