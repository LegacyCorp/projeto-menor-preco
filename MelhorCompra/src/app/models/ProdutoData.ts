export type ProdutoData = {
  name:string
  valor:string
  tempo:string
  distancia:string
  estabelecimento: {
    nomeEmpresa:string
    tp_logr:string
    nm_logr:string
    nr_logr:string
    bairro:string
    mun:string
    uf:string
  }
}