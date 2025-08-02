import React, { lazy, Suspense } from 'react';

const Page1mewgyf = lazy(() => import('./Page'));

const LazyPage1mewgyf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mewgyf />
  </Suspense>
);

export { LazyPage1mewgyf };
