import React, { lazy, Suspense } from 'react';

const Page1mih2wn = lazy(() => import('./Page'));

const LazyPage1mih2wn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mih2wn />
  </Suspense>
);

export { LazyPage1mih2wn };
