import type { NextPage } from 'next'

import { classNames } from '~/styles/utilities'

const Home: NextPage = () => {
  return (
    <div className={classNames("h-full", "w-full", "flex", "items-center", "justify-center")}>
      <div className={classNames("bg-blue-6", "p-lg", "radius-lg", "font-body", "text-blue-12")}>
        Hello. I am a centered div.
      </div>
    </div>
  );
};

export default Home;
