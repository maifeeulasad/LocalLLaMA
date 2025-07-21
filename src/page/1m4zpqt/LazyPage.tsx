import React, { lazy, Suspense } from 'react';

const Page1m4zpqt = lazy(() => import('./Page'));

const LazyPage1m4zpqt = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4zpqt />
  </Suspense>
);

export { LazyPage1m4zpqt };
