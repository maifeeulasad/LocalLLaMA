import React, { lazy, Suspense } from 'react';

const Page1mjd2yd = lazy(() => import('./Page'));

const LazyPage1mjd2yd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjd2yd />
  </Suspense>
);

export { LazyPage1mjd2yd };
