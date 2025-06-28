import React, { lazy, Suspense } from 'react';

const Page1iqpzpk = lazy(() => import('./Page'));

const LazyPage1iqpzpk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1iqpzpk />
  </Suspense>
);

export { LazyPage1iqpzpk };
