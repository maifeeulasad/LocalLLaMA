import React, { lazy, Suspense } from 'react';

const Page1mbmkkp = lazy(() => import('./Page'));

const LazyPage1mbmkkp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbmkkp />
  </Suspense>
);

export { LazyPage1mbmkkp };
