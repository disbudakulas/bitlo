export interface IMarket {
  marketCode: string;
  currentQuote: string;
  change24h: string;
  change24hPercent: string;
  highestQuote24h: string;
  lowestQuote24h: string;
  weightedAverage24h: string;
  volume24h: string;
  ask: string;
  bid: string;
}

export interface IBid {
  0: string;
  1: string;
}

export interface IAsk {
  0: string;
  1: string;
}

export interface IMarketDetail {
  sequenceId?: number;
  bids?: IBid[];
  asks?: IAsk[];
}
