import { useAtom } from 'jotai';

import { useAutoAnimate } from '@formkit/auto-animate/react';

import Moon from '../../assets/svgs/icon-moon.svg';
import Sun from '../../assets/svgs/icon-sun.svg';

import { themeSelectedAtom, todosAtom, todosFiltredsAtom } from '../../atoms';

import {
  Body,
  Container,
  ContainerHeader,
  Content,
  Form,
  Header,
  NavigationMobile,
  Footer as FooterAbsolute,
} from './styles';
import { Todos } from '../../components/Todos';
import { EmptyComponent } from '../../components/EmptyComponent';
import { Footer } from '../../components/Footer';
import { toast } from 'react-toastify';
import { useForm } from '../../hooks/useForm';
import { useFilter } from '../../hooks/useFilter';
import { useTabs } from '../../hooks/useTabs';
import { useState } from 'react';

type Todos = {
  id: string;
  content: string;
  active: boolean;
};

export function Home() {
  const [selectedTheme, setSelectedTheme] = useAtom(themeSelectedAtom);
  const [parentRef] = useAutoAnimate<HTMLDivElement>();
  const [tabOpen, handleChangeTab] = useTabs();
  const [inputRef, handleSubmit] = useForm();
  const [filterdsTodos] = useAtom(todosFiltredsAtom);
  const [
    isEmpty,
    {
      handleSetFilterFromActive,
      handleSetFilterFromCompleted,
      handleSetIsEmpty,
    },
  ] = useFilter();

  function toggleTheme() {
    // setSelectedTheme(selectedTheme === 'dark' ? 'light' : 'dark');
    toast.error('Method not implemented', {
      position: 'top-center',
      draggable: true,
    });
  }

  return (
    <Container>
      <ContainerHeader isDarkTheme={selectedTheme === 'dark'}>
        <Header>
          <h1>Todo</h1>
          <button onClick={toggleTheme}>
            {selectedTheme === 'light' ? <img src={Moon} /> : <img src={Sun} />}
          </button>
        </Header>
      </ContainerHeader>
      <Body>
        <Form onSubmit={handleSubmit}>
          <div>
            <div>
              <div />
            </div>
            <input
              type='text'
              placeholder='Create a new todo...'
              ref={inputRef}
            />
          </div>
        </Form>

        <Content ref={parentRef}>
          {!isEmpty ? <Todos tabOpen={tabOpen} /> : <EmptyComponent />}
          {!filterdsTodos.length && <EmptyComponent />}
          <Footer
            setIsEmpty={handleSetIsEmpty}
            filterFromActive={handleSetFilterFromActive}
            filterFromCompleted={handleSetFilterFromCompleted}
            tabOpen={tabOpen}
          />
        </Content>
        <NavigationMobile>
          <ul>
            <li className={tabOpen === 'all' ? 'active' : ''}>
              <button onClick={() => handleChangeTab('all')}>All</button>
            </li>
            <li className={tabOpen === 'active' ? 'active' : ''}>
              <button onClick={() => handleChangeTab('active')}>Active</button>
            </li>
            <li className={tabOpen === 'completed' ? 'active' : ''}>
              <button onClick={() => handleChangeTab('completed')}>
                Completed
              </button>
            </li>
          </ul>
        </NavigationMobile>
      </Body>
      <FooterAbsolute>
        <span>Drag and drop to reorder list</span>
      </FooterAbsolute>
    </Container>
  );
}
