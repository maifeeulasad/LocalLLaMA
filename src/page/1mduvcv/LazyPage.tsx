import React, { lazy, Suspense } from 'react';

const Page1mduvcv = lazy(() => import('./Page'));

const LazyPage1mduvcv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mduvcv />
  </Suspense>
);

export { LazyPage1mduvcv };
