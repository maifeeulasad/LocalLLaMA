import React, { lazy, Suspense } from 'react';

const Page1meiwzu = lazy(() => import('./Page'));

const LazyPage1meiwzu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1meiwzu />
  </Suspense>
);

export { LazyPage1meiwzu };
