import React, { lazy, Suspense } from 'react';

const Page1miw8om = lazy(() => import('./Page'));

const LazyPage1miw8om = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miw8om />
  </Suspense>
);

export { LazyPage1miw8om };
