
# 1. Cieľ projektu 

Vytvoriť aplikáciu ktorá pomôže manažovať projekty rôznych typov. Vytvorenie projektu plus pridávanie skupín táskov. Vytvoriť role užívateľov. Zobrazenie progresu projektu.

# 2. Opísanie systému

- Registrácia, autentifikácia a prihlásenie
- Funkcionál vytvorenie projektu, tásku a skupiny táskov
- Úprava projektu, tasku a skupinu 
- Priradenie tásku danej osobe
- Filtrovanie & Hľadanie 
- Zmena statusu Tásku
- Notifikácie o priradení alebo zmene
- Vytvorenie Template projektov kopírovanie a vytvorenie

- Vyskúšať Novel na editovanie textu

# 2.1 Registrácia, autentifikácia a prihlásenie


# 2.2 Projekt, task a skupina

Na vytvorenie projektu použijem formulár. Formulár bude obsahovať názov projektu a dedline projektu. Vo vnútri projektu už budeme môcť vytvoriť skupinu táskov alebo samotný task. Task budem mocť vytvoriť aj na stránke Dashboard alebo Home. Task príma id projektu ku ktorému to priradíme. Skupina bude voliteľná. Doplnkové údaje sú priorita a progres tásku. Skupina slúži na to aby sme si vedeli tásky zorganizovať. Napríklad UI/UX Design Front-end Back-end a podobne. Na vytvorenie skupiny meno a id projektu.

# 3. Technologický Stack 

Aplikácia bude vytvorená pomocou Frameworku Next.js ktorý sa bude používať ako Full-Stack Framework. 

- Next.js
- Typescript
- Tailwindcss
- shadncn/ui
- Lucide icon

- Prisma ORM
- DB PostgresSQL
