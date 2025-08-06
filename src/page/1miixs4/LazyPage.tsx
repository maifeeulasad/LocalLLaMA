import React, { lazy, Suspense } from 'react';

const Page1miixs4 = lazy(() => import('./Page'));

const LazyPage1miixs4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miixs4 />
  </Suspense>
);

export { LazyPage1miixs4 };
