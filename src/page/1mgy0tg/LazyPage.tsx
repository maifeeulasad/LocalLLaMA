import React, { lazy, Suspense } from 'react';

const Page1mgy0tg = lazy(() => import('./Page'));

const LazyPage1mgy0tg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgy0tg />
  </Suspense>
);

export { LazyPage1mgy0tg };
