import React, { lazy, Suspense } from 'react';

const Page1miuctw = lazy(() => import('./Page'));

const LazyPage1miuctw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miuctw />
  </Suspense>
);

export { LazyPage1miuctw };
