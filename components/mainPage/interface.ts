export interface Root {
  readonly time: Time
  readonly disclaimer: string
  readonly chartName: string
  readonly bpi: Bpi
  }
  
  export interface Time {
    readonly updated: string
    readonly updatedISO: string
    readonly updateduk: string
  }
  
  export interface Bpi {
    readonly USD: Usd
    readonly GBP: Gbp
    readonly EUR: Eur
  }
  
  export interface Usd {
    readonly code: string
    readonly symbol: string
    readonly rate: string
    readonly description: string
    readonly rate_float: number
  }
  
  export interface Gbp {
    readonly code: string
    readonly symbol: string
    readonly rate: string
    readonly description: string
    readonly rate_float: number
  }
  
  export interface Eur {
    readonly code: string
    readonly symbol: string
    readonly rate: string
    readonly description: string
    readonly rate_float: number
  }