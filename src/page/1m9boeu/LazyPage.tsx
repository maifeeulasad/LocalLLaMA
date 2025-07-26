import React, { lazy, Suspense } from 'react';

const Page1m9boeu = lazy(() => import('./Page'));

const LazyPage1m9boeu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9boeu />
  </Suspense>
);

export { LazyPage1m9boeu };
