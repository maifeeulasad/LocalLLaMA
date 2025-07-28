import React, { lazy, Suspense } from 'react';

const Page1mam8p4 = lazy(() => import('./Page'));

const LazyPage1mam8p4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mam8p4 />
  </Suspense>
);

export { LazyPage1mam8p4 };
