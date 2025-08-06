import React, { lazy, Suspense } from 'react';

const Page1mibuho = lazy(() => import('./Page'));

const LazyPage1mibuho = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mibuho />
  </Suspense>
);

export { LazyPage1mibuho };
