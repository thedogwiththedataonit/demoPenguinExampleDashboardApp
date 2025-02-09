import { delay } from '@/constants/mock-api';
import { RecentSales } from '@/features/overview/components/recent-sales';

export default async function Sales() {
  await delay(100);
  return <RecentSales />;
}
