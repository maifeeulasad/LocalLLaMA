import React, { lazy, Suspense } from 'react';

const Page1miw9nw = lazy(() => import('./Page'));

const LazyPage1miw9nw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miw9nw />
  </Suspense>
);

export { LazyPage1miw9nw };
