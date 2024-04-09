export type ProdutoData = {
  
  precos: {
    max:string
    min:string
  }
  produtos: {
    desc:string
    distkm:string
    valor:string
    tempo:string
    estabelecimento: {
      nm_emp:string
      tp_logr:string
      nm_logr:string
      nr_logr:string
      bairro:string
      mun:string
      uf:string
    }
  }[]
}