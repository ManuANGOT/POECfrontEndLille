import { MilieuNaturel } from "./MilieuNaturel"; 

export interface Terrestre extends MilieuNaturel {
    respirerHorsEau(): void;
    marcher(): void;
}