# PROVINCIA — Landing page

Template Next.js (App Router) + TypeScript + Tailwind CSS 4 + daisyUI 5.

## Démarrage

```bash
npm install
npm run dev
```

Ouvre http://localhost:3000.

## Ce qui fonctionne
- Page d'accueil responsive avec navigation ancrée, menu mobile
- Deux cartes de langues et modale « bientôt disponible »
- Mini-exercice de démonstration interactif (réponse correcte : Bonghjornu)
- Design system daisyUI `provincia`

Il s'agit d'une landing page uniquement : aucun compte ni API Symfony n'est intégré. Les parcours et réseaux sociaux ne sont pas encore disponibles.

## Remplacer la mascotte

Ajouter la mascotte officielle au format PNG transparent dans `public/mascots/mouflon.png`, puis modifier la valeur de `src` dans `src/components/Mascot.tsx` de `/mascots/mouflon.svg` vers `/mascots/mouflon.png`.
