import React, { lazy, Suspense } from 'react';

const Page1ltgh9h = lazy(() => import('./Page'));

const LazyPage1ltgh9h = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltgh9h />
  </Suspense>
);

export { LazyPage1ltgh9h };
