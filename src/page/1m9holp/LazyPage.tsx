import React, { lazy, Suspense } from 'react';

const Page1m9holp = lazy(() => import('./Page'));

const LazyPage1m9holp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9holp />
  </Suspense>
);

export { LazyPage1m9holp };
