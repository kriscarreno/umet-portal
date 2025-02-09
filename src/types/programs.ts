export type Program = {
  name: string;
  description: string;
  duration_years: number;
  categories: [];
  program_type: {
    name: string;
    id: number;
  };
  avg_stars: number;
  total_enrollments: number;
  id: number;
  image: string;
};
