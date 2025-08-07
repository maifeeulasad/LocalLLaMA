import React, { lazy, Suspense } from 'react';

const Page1mjlvxo = lazy(() => import('./Page'));

const LazyPage1mjlvxo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjlvxo />
  </Suspense>
);

export { LazyPage1mjlvxo };
