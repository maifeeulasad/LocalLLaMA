import React, { lazy, Suspense } from 'react';

const Page1lu7lsi = lazy(() => import('./Page'));

const LazyPage1lu7lsi = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lu7lsi />
  </Suspense>
);

export { LazyPage1lu7lsi };
