import React, { lazy, Suspense } from 'react';

const Page1md7h5z = lazy(() => import('./Page'));

const LazyPage1md7h5z = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1md7h5z />
  </Suspense>
);

export { LazyPage1md7h5z };
