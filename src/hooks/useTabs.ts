import { useState } from 'react';

type TabOpen = 'all' | 'active' | 'completed';

export function useTabs(): [TabOpen, (tab: TabOpen) => void] {
  const [tabOpen, setTabOpen] = useState<TabOpen>('all');

  function handleChangeTab(tab: TabOpen) {
    setTabOpen(tab);
  }

  return [tabOpen, handleChangeTab];
}
