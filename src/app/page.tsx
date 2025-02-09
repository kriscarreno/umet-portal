import HomeContainer from "@/components/home/home-container";
import { SearchParams } from "@/types/params";
type Props = {
  searchParams: Promise<SearchParams>;
};
export default async function Home({ searchParams }: Props) {
  return <HomeContainer searchParams={await searchParams} />;
}
