import instance from "./api";
import {
  ApiResponse,
  Environment,
  KeyGenerationFormOptions,
  WithToken,
} from "./dtos";
import { User } from "./entities";

/**
 * actions
 * auth handle auth => return user and token [mutation]
 * generate user service keys [mutation]
 * add/delete user trusted domains [mutation]
 * update user environment [mutation]
 * revoke user keys
 * fetch user
 */

export const resolveUser = ({ token }: WithToken) => {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return instance.post<ApiResponse<User>>("/auth/callback");
};

export const generateApiKeys = (data: WithToken<KeyGenerationFormOptions>) => {
  instance.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
  return instance.post<
    ApiResponse<{ publicKey: string; trustedDomains: string[] }>
  >("/generate-key", data);
};

export const addTrustedDomains = (data: WithToken<{ domains: string[] }>) => {
  instance.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
  return instance.post<ApiResponse<Array<string>>>("/domains", {
    domains: data.domains,
  });
};

export const updateTrustedDomains = (
  data: WithToken<{ domains: string[] }>
) => {
  instance.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
  return instance.put<ApiResponse<Array<string>>>("/domains/update", {
    domains: data.domains,
  });
};

export const revokeUserKeys = (data: WithToken) => {
  instance.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
  return instance.delete<ApiResponse<null>>("/revoke-keys");
};

export const updateUserEnvironment = (
  data: WithToken<{ environment: Environment }>
) => {
  instance.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
  return instance.patch<ApiResponse<null>>("/environment", {
    environment: data.environment,
  });
};
