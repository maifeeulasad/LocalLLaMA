import React, { lazy, Suspense } from 'react';

const Page1miuluj = lazy(() => import('./Page'));

const LazyPage1miuluj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miuluj />
  </Suspense>
);

export { LazyPage1miuluj };
