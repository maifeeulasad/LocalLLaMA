import React, { lazy, Suspense } from 'react';

const Page1mao3ym = lazy(() => import('./Page'));

const LazyPage1mao3ym = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mao3ym />
  </Suspense>
);

export { LazyPage1mao3ym };
