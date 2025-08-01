import React, { lazy, Suspense } from 'react';

const Page1meucvo = lazy(() => import('./Page'));

const LazyPage1meucvo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1meucvo />
  </Suspense>
);

export { LazyPage1meucvo };
