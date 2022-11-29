export interface MilieuNaturel {
  vivre(): string;
}

interface Terrestre extends MilieuNaturel {
  respirerSousEau();
  nager();
  respirerHorsEau(): void;
  marcher(): void;
}

/** 
interface Communiquer extends Animal {
  communique: string;
  communication(): void;
}
*/
