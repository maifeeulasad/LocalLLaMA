import React, { lazy, Suspense } from 'react';

const Page1llnwy5 = lazy(() => import('./Page'));

const LazyPage1llnwy5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1llnwy5 />
  </Suspense>
);

export { LazyPage1llnwy5 };
