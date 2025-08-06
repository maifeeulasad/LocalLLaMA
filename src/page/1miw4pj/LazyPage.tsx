import React, { lazy, Suspense } from 'react';

const Page1miw4pj = lazy(() => import('./Page'));

const LazyPage1miw4pj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miw4pj />
  </Suspense>
);

export { LazyPage1miw4pj };
