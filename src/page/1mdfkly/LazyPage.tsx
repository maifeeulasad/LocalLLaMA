import React, { lazy, Suspense } from 'react';

const Page1mdfkly = lazy(() => import('./Page'));

const LazyPage1mdfkly = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdfkly />
  </Suspense>
);

export { LazyPage1mdfkly };
