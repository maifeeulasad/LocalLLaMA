import React, { lazy, Suspense } from 'react';

const Page1mj0kw2 = lazy(() => import('./Page'));

const LazyPage1mj0kw2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj0kw2 />
  </Suspense>
);

export { LazyPage1mj0kw2 };
