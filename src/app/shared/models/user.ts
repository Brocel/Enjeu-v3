export class User {
  readonly id: string; // id de l'utilisateur
  email: string; // email de l'utilisateur
  isNewUser: boolean; // première connexion de l'utilisateur ?
  lastLoginDate: number; // date de la dernière connexion
  name: string; // nom de l'utilisateur
  avatar: string; // url de la photo de profil
  registrationDate: number; // date d'inscription
  role: Array<'JOUEUR'|'MDJ'>; // rôles
}
