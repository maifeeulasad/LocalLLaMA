import React, { lazy, Suspense } from 'react';

const Page1mhprfk = lazy(() => import('./Page'));

const LazyPage1mhprfk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhprfk />
  </Suspense>
);

export { LazyPage1mhprfk };
