import React, { lazy, Suspense } from 'react';

const Page1miy8ni = lazy(() => import('./Page'));

const LazyPage1miy8ni = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miy8ni />
  </Suspense>
);

export { LazyPage1miy8ni };
