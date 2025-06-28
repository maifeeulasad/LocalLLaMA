import React, { lazy, Suspense } from 'react';

const Page1llwfwv = lazy(() => import('./Page'));

const LazyPage1llwfwv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1llwfwv />
  </Suspense>
);

export { LazyPage1llwfwv };
