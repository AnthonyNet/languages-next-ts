export interface Root {
    time: Time
    disclaimer: string
    chartName: string
    bpi: Bpi
  }
  
  export interface Time {
    updated: string
    updatedISO: string
    updateduk: string
  }
  
  export interface Bpi {
    USD: Usd
    GBP: Gbp
    EUR: Eur
  }
  
  export interface Usd {
    code: string
    symbol: string
    rate: string
    description: string
    rate_float: number
  }
  
  export interface Gbp {
    code: string
    symbol: string
    rate: string
    description: string
    rate_float: number
  }
  
  export interface Eur {
    code: string
    symbol: string
    rate: string
    description: string
    rate_float: number
  }