import React, { lazy, Suspense } from 'react';

const Page1m576x6 = lazy(() => import('./Page'));

const LazyPage1m576x6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m576x6 />
  </Suspense>
);

export { LazyPage1m576x6 };
