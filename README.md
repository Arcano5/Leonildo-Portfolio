# Portfólio — Leonildo Freitas Gomes

Este projeto é um **portfólio profissional em React**, desenvolvido com foco em:
- Performance
- UX/UI moderno
- Componentização
- Escalabilidade
- SEO técnico básico

---

## 🚀 Tecnologias Utilizadas

- **React**
- **Tailwind CSS**
- **lucide-react** (ícones)
- **JavaScript (ES6+)**

---

## 📁 Estrutura Geral

- `App.jsx` → Componente principal
- Componentes reutilizáveis:
  - `ProjectCard` → Cards de projetos
  - `TechBadge` → Tecnologias / Stack
- Assets:
  - Imagens de perfil
  - Screenshots de projetos

---

## 🧩 Como adicionar um novo projeto

No arquivo `App.jsx`, localize o array `projects`:

```js
const projects = [
  {
    title: 'Nome do Projeto',
    description: 'Descrição curta',
    tags: ['React', 'API'],
    github: 'https://github.com/seurepo',
    link: 'https://seudemo.com',
    image: '/src/assets/imagem.png'
  }
];
