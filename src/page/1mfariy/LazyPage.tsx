import React, { lazy, Suspense } from 'react';

const Page1mfariy = lazy(() => import('./Page'));

const LazyPage1mfariy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfariy />
  </Suspense>
);

export { LazyPage1mfariy };
