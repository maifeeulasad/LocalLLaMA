import React, { lazy, Suspense } from 'react';

const Page1mjub4z = lazy(() => import('./Page'));

const LazyPage1mjub4z = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjub4z />
  </Suspense>
);

export { LazyPage1mjub4z };
