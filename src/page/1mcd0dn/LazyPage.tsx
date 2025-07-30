import React, { lazy, Suspense } from 'react';

const Page1mcd0dn = lazy(() => import('./Page'));

const LazyPage1mcd0dn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcd0dn />
  </Suspense>
);

export { LazyPage1mcd0dn };
