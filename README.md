# MEGA TOYS — Loja de Brinquedos Online (2026)

E-commerce de brinquedos, jogos e presentes desenvolvido com foco em experiência mobile-first, visual alegre e alta conversão (CRO).

## Identidade & Loja
- **Marca:** MEGA TOYS
- **Instagram:** [@megatoys.sousa](https://www.instagram.com/megatoys.sousa)
- **Localização:** Sousa - PB
- **Público:** crianças, pais e famílias
- **Paleta Oficial:** Azul (`#052A97`), Azul Marinho (`#051D6F`), Vermelho (`#EB1019`), Amarelo (`#FBCC0F`), Verde (`#04B02A`), Laranja (`#F2A018`), fundo Branco.

---

## Como Executar o Projeto

```bash
# Entrar no diretório do projeto
cd website-megaToys

# Iniciar o servidor de desenvolvimento
npm run dev
# Acesse: http://localhost:3005
```

---

## Principais Recursos

1. **Mobile-First Nativo:**
   - Barra de navegação inferior permanente com acesso rápido: *Início*, *Coleções*, *Buscar*, *Desejos* e *Sacola*.
   - Grade de 2 colunas com proporção 3:4 e preços legíveis sem rolagem excessiva.
   - Header com logo oficial da Mega Toys.

2. **Home Page:**
   - Hero com vídeo institucional e campanhas em slider.
   - Vitrine de novidades com badges discretas de coleção e desconto.
   - Seção institucional "Conheça a Mega Toys" com foto da fachada.
   - Apresentação de marcas e seção de Instagram oficial (@megatoys.sousa).

3. **Catálogo & PLP (`/loja`):**
   - Filtros laterais no Desktop e drawer elegante no Mobile.
   - Ordenação dinâmica por relevância, novidade e preço.
   - Busca preditiva instantânea em modal dedicado.

4. **Página de Produto / PDP (`/produto/[slug]`):**
   - Galeria de imagens em alta definição com zoom e miniaturas.
   - Seletor visual de cores e tamanhos em tempo real.
   - Modal interativo de **Guia de Medidas**.
   - Simulador de frete para todo o Brasil.
   - CTAs de alta conversão: *Adicionar à Sacola* e *Comprar Agora (1-Clique)*.

5. **Carrinho & Checkout CRO (`/checkout`):**
   - Drawer lateral no desktop e bottom sheet no mobile com barra de progresso para frete grátis (R$ 499).
   - Checkout sem distrações com suporte a **PIX (com 5% OFF)**, cartão de crédito parcelado em até 10x sem juros e finalização humanizada via WhatsApp.

---

## Stack Técnica

- **Framework:** Next.js 16 (App Router + Turbopack)
- **UI:** React 19 + TypeScript + Tailwind CSS v4
- **Ícones:** lucide-react
- **Estado:** React Context (Carrinho + Favoritos com localStorage)
