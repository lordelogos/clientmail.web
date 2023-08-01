import { Environment } from "./dtos";

export class User {
  id: number;
  name: string;
  email: string;
  publicKey: string | null;
  trustedDomains: string[];
  environment: Environment;
  emailsSentThisMonth: number;
  created_at: string;
  /**
   *
   */
  constructor(dto: User) {
    this.id = dto.id;
    this.name = dto.name;
    this.email = dto.email;
    this.publicKey = dto.publicKey;
    this.trustedDomains = dto.trustedDomains;
    this.environment = dto.environment;
    this.emailsSentThisMonth = dto.emailsSentThisMonth;
    this.created_at = dto.created_at;
  }
}
