import React, { lazy, Suspense } from 'react';

const Page1miw41b = lazy(() => import('./Page'));

const LazyPage1miw41b = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miw41b />
  </Suspense>
);

export { LazyPage1miw41b };
