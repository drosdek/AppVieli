export interface Equipamento {
  id_equipamento: number;
  equipamento: string;
  unidade: string;
  horaatual: string;
  metaminuto: number;
  producao: number;
  retrabalho: number;
  metaatual: number;
  disponibilidade: number;
  performance: number;
  qualidade: number;
  pctmeta: number;
  ritmodia: number;
  ritmometa: number;
  ritmominuto: null;
  inicioparada: null;
  TempoParado: null;
  metaoee: number;
  grupotelao: number;
  pctretrabalho: number;
}
