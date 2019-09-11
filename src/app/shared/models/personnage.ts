export class Personnage {
  // Présentation
  readonly id: string; //id personnage
  role: Array<'JOUEUR'|'MOB'>; // rôles : joueur ou ennemi
  readonly niveau: number; //niveau du perso
  name: string;
  avatar: string; // url de la photo
  sexe: string;
  race: string;
  // Caractéristiques sociales
  metier: string;
  specialite: string;
  caractere: string; // règles de roleplay
  description: string; // histoire du Personnage
  // Caractéristiques physiques
  taille: number; // en cm
  masse: number; // en kg
  age: number; // en années
  readonly for: number, //force physique du personnage
  readonly def: number, //résistance physique/endurance du personnage
  readonly int: number, //force/résistance mentale / charisme du personnage
  // Autres
  inventaire: string; //objets portés
  readonly exp: number; // expérience du personnage

}
