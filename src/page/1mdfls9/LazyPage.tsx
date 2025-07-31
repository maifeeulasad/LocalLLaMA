import React, { lazy, Suspense } from 'react';

const Page1mdfls9 = lazy(() => import('./Page'));

const LazyPage1mdfls9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdfls9 />
  </Suspense>
);

export { LazyPage1mdfls9 };
