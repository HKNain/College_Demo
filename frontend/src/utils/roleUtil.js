import { api } from "./axios";

export const roleUtil = async () => {
  const res = await api.get("/api/auth/me");
  return res.data.role;
};
