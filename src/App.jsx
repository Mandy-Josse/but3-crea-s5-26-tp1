import BigCard from './components/BigCard/Bigcard.jsx';
import SmCard from './components/SmCard/SmCard.jsx';

import Data from './Data/data.js';
import { useState } from 'react';



function App() {
  const [IsDark, setDark] = useState(false);

  const handlerToggle = () => {
    setDark(!IsDark);
  };

  return (
    <main>
      <header className='flex flex-row items-center justify-between gap-20 py-10 px-50'>
        <section className='flex flex-col items-left justify-left gap-2'>
          <h1 className="text-3xl font-bold">Social Media Dashboard</h1>
          <p>Total followers: {Data.FollowersTot}</p>
        </section>

        <section className="flex flex-row items-center gap-10">
          <p>Dark Mode</p>
          <label className="relative inline-flex cursor-pointer items-center">
            <input type="checkbox" checked={IsDark} onChange={handlerToggle} className="peer sr-only" />
            <span className="h-8 w-14 rounded-full bg-LightToggle peer-checked:bg-DarkToggle" />
            <span className=" absolute left-1 h-6 w-6 rounded-full bg-blue-500 transition-transform peer-checked:translate-x-6" />
          </label>
        </section>
      </header>

      <section className='flex flex-col md:flex-row'>
        {Data.PlateformTot.map((item, index) => (
          <li key={index}>
            <BigCard
              plateforme={item.plateforme}
              utilisateur={item.utilisateur}
              total={item.total}
              aujourdHui={item.aujourdHui}
            />
          </li>
        ))}
      </section>

      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10'>
        <ul>
          {Data.DailyStat.map((item, index) => (
            <li key={index}>
              <SmCard
                plateforme={item.plateforme}
                indicateur={item.indicateur}
                montant={item.montant}
                pourcentage={item.pourcentage}
              />
            </li>
          ))}
        </ul>

      </section>
    </main>
  );
}

export default App;