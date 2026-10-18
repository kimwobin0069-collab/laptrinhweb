import { IllustratedGlyph } from './IllustratedArtwork';
export const FESTIVE_KINDS = ['devil','witch','candy','snowman','santa','reindeer','stocking','bauble','chung','watermelon','lion','mai','peach'] as const;
export type FestiveKind = typeof FESTIVE_KINDS[number];
export function FestiveGlyph({kind}:{kind:FestiveKind}) {return <IllustratedGlyph kind={kind}/>;}
