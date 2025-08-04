import React, { lazy, Suspense } from 'react';

const Page1mgjvn8 = lazy(() => import('./Page'));

const LazyPage1mgjvn8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgjvn8 />
  </Suspense>
);

export { LazyPage1mgjvn8 };
