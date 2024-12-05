"use client"

import BasicTabs from '@/components/TabsNavigation';
import AccordionUsage from '@/components/AccordionBanner';

export default function Home() {
  return (
    <>
      <header className="w-full">
        <div className="flex flex-col w-full">
          <AccordionUsage/>
        </div>
      </header>
      <main>
        <BasicTabs/>
      </main>
      <footer>
        
      </footer>
    </>
  );
}
