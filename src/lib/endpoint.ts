import instance from "./api";
import { ApiResponse, Environment, KeyGenerationFormOptions } from "./dtos";
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

export const fetchUser = () => {
  return instance.get<ApiResponse<User>>("/users");
};

export const generateApiKeys = (data: KeyGenerationFormOptions) => {
  return instance.post<
    ApiResponse<{ publicKey: string; trustedDomains: string[] }>
  >("/generate-key", data);
};

export const addTrustedDomains = (domains: string[]) => {
  return instance.post<ApiResponse<Array<string>>>("/domains", { domains });
};

export const updateTrustedDomains = (domains: string[]) => {
  return instance.put<ApiResponse<Array<string>>>("/domains/update", {
    domains,
  });
};

export const revokeUserKeys = () => {
  return instance.delete<ApiResponse<null>>("/revoke-keys");
};

export const updateUserEnvironment = (environment: Environment) => {
  return instance.patch<ApiResponse<null>>("/environment", { environment });
};
