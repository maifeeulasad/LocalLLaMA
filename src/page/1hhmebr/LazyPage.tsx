import React, { lazy, Suspense } from 'react';

const Page1hhmebr = lazy(() => import('./Page'));

const LazyPage1hhmebr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1hhmebr />
  </Suspense>
);

export { LazyPage1hhmebr };
