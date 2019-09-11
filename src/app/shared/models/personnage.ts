export class Personnage {
  // Présentation
  readonly id: string; //id personnage
  role: Array<'JOUEUR'|'MOB'>; // rôles : joueur ou ennemi
  readonly titre: string;
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
  for: number; //force physique du personnage
  def: number; //résistance physique/endurance du personnage
  int: number; //force/résistance mentale / charisme du personnage
  // Autres
  inventaire: string; //objets portés
  readonly exp: number; // expérience du personnage

  constructor(
    id: string,
    role: Array<'JOUEUR'|'MOB'>,
    name: string,
    avatar: string, // url de la photo
    sexe: string,
    race: string,
    metier: string,
    specialite: string,
    taille: number,
    masse: number,
    age: number
  )
  {
    this.exp = 0;
    if (this.exp==0) {
      this.titre = 'Nouvel arrivant';
      this.niveau = 1;
    }
  }

}
