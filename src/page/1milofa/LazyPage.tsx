import React, { lazy, Suspense } from 'react';

const Page1milofa = lazy(() => import('./Page'));

const LazyPage1milofa = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1milofa />
  </Suspense>
);

export { LazyPage1milofa };
