import React, { lazy, Suspense } from 'react';

const Page1mif1xp = lazy(() => import('./Page'));

const LazyPage1mif1xp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mif1xp />
  </Suspense>
);

export { LazyPage1mif1xp };
