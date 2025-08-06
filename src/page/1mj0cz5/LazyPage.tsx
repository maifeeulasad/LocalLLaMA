import React, { lazy, Suspense } from 'react';

const Page1mj0cz5 = lazy(() => import('./Page'));

const LazyPage1mj0cz5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj0cz5 />
  </Suspense>
);

export { LazyPage1mj0cz5 };
