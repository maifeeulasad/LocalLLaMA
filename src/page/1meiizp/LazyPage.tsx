import React, { lazy, Suspense } from 'react';

const Page1meiizp = lazy(() => import('./Page'));

const LazyPage1meiizp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1meiizp />
  </Suspense>
);

export { LazyPage1meiizp };
