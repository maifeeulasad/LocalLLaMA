import React, { lazy, Suspense } from 'react';

const Page1mepr38 = lazy(() => import('./Page'));

const LazyPage1mepr38 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mepr38 />
  </Suspense>
);

export { LazyPage1mepr38 };
