import HomeContainer from "@/components/home/home-container";
import { SearchParams } from "@/types/params";
type Props = {
  searchParams: SearchParams;
};
export default function Home({ searchParams }: Props) {
  return <HomeContainer searchParams={searchParams} />;
}
