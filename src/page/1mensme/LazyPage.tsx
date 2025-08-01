import React, { lazy, Suspense } from 'react';

const Page1mensme = lazy(() => import('./Page'));

const LazyPage1mensme = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mensme />
  </Suspense>
);

export { LazyPage1mensme };
