import React, { lazy, Suspense } from 'react';

const Page1mchmfa = lazy(() => import('./Page'));

const LazyPage1mchmfa = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mchmfa />
  </Suspense>
);

export { LazyPage1mchmfa };
