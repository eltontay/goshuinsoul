import { useAuth } from '@goshuinsoul/providers';
import HomeBase from './HomeBase';
import 'react-notifications/lib/notifications.css';
import { Navbar } from '@goshuinsoul/components';

const Page: NextPageWithLayout = () => {
  const { isLoading } = useAuth();

  return (
    <>
      {isLoading && (
        <div>{/* <img src="loader-2.gif" className="loader" /> */}</div>
      )}
      <Navbar />
      <HomeBase />
    </>
  );
};

export default Page;

// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path';
import { NextPageWithLayout } from './_app';
