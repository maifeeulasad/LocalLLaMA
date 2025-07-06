import React, { lazy, Suspense } from 'react';

const Page1lsazjq = lazy(() => import('./Page'));

const LazyPage1lsazjq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsazjq />
  </Suspense>
);

export { LazyPage1lsazjq };
