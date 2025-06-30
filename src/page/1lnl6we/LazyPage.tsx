import React, { lazy, Suspense } from 'react';

const Page1lnl6we = lazy(() => import('./Page'));

const LazyPage1lnl6we = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lnl6we />
  </Suspense>
);

export { LazyPage1lnl6we };
