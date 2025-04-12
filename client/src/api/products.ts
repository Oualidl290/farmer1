import { api } from "../utils/api-config";

export async function getProducts() {
  const res = await api.get("/products");
  return res.data;
}

// * Using React Query hooks
// const queryClient = useQueryClient()
// const { data: products, isLoading, isError } = useQuery({ queryKey: ['products'], queryFn: getProducts })
